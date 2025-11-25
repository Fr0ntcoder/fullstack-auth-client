'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useLoginMutation } from '@/features/auth/hooks'
import {
	LoginSchema,
	TypeLoginSchema
} from '@/features/auth/schemes/login.schema'

import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '@/shared/components/ui'

interface Props {
	onHandler: () => void
}

export const LoginForm = ({ onHandler }: Props) => {
	const { theme } = useTheme()
	const [recaptcha, setRecaptcha] = useState<string | null>(null)
	const [isTwoFactor, setIsTwoFactor] = useState<boolean>(false)

	const form = useForm<TypeLoginSchema>({
		mode: 'onChange',
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})
	const { login, isLoadingLogin } = useLoginMutation(setIsTwoFactor)

	const onSubmit = (data: TypeLoginSchema) => {
		recaptcha
			? login({ data, recaptcha })
			: toast.error('Пройдите reCAPTCHA')
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col space-y-5'
			>
				{isTwoFactor && (
					<FormField
						control={form.control}
						name='code'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Код аутентификации</FormLabel>
								<FormControl>
									<Input
										type='text'
										disabled={isLoadingLogin}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				)}
				{!isTwoFactor && (
					<>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type='email'
											placeholder='Введите email'
											disabled={isLoadingLogin}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Пароль</FormLabel>
									<FormControl>
										<Input
											type='password'
											placeholder='******'
											disabled={isLoadingLogin}
											{...field}
										/>
									</FormControl>
									<div className='flex justify-end'>
										<span
											onClick={onHandler}
											className='cursor-pointer text-sm hover:underline'
										>
											Забыли пароль?
										</span>
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>
					</>
				)}
				<div className='flex justify-center'>
					<ReCAPTCHA
						sitekey={
							process.env.GOOGLE_RECAPTCHA_SITE_KEY as string
						}
						onChange={setRecaptcha}
						theme={theme === 'dark' ? 'dark' : 'light'}
					/>
				</div>
				<Button type='submit' disabled={isLoadingLogin}>
					Войти
				</Button>
			</form>
		</Form>
	)
}
