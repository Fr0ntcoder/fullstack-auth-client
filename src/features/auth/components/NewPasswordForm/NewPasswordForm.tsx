'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useNewPasswordMutation } from '@/features/auth/hooks'
import {
	TypeNewPasswordSchema,
	newPasswordSchema
} from '@/features/auth/schemes'

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

export const NewPasswordForm = () => {
	const { theme } = useTheme()
	const [recaptcha, setRecaptcha] = useState<string | null>(null)
	const form = useForm<TypeNewPasswordSchema>({
		mode: 'onChange',
		resolver: zodResolver(newPasswordSchema),
		defaultValues: {
			password: ''
		}
	})
	const { newPassword, isLoadingNew } = useNewPasswordMutation()

	const onSubmit = (data: TypeNewPasswordSchema) => {
		recaptcha
			? newPassword({ data, recaptcha })
			: toast.error('Пройдите reCAPTCHA')
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col space-y-5'
			>
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
									disabled={isLoadingNew}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='flex justify-center'>
					<ReCAPTCHA
						sitekey={
							process.env.GOOGLE_RECAPTCHA_SITE_KEY as string
						}
						onChange={setRecaptcha}
						theme={theme === 'dark' ? 'dark' : 'light'}
					/>
				</div>
				<Button type='submit' disabled={isLoadingNew}>
					Продолжить
				</Button>
			</form>
		</Form>
	)
}
