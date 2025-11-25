'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useResetPasswordMutation } from '@/features/auth/hooks'
import {
	TypeResetPasswordSchema,
	resetPasswordSchema
} from '@/features/auth/schemes/reset-pasword.schema'

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

export const ResetPasswordForm = () => {
	const { theme } = useTheme()
	const [recaptcha, setRecaptcha] = useState<string | null>(null)
	const form = useForm<TypeResetPasswordSchema>({
		mode: 'onChange',
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			email: ''
		}
	})
	const { reset, isLoadingReset } = useResetPasswordMutation()

	const onSubmit = (data: TypeResetPasswordSchema) => {
		recaptcha
			? reset({ data, recaptcha })
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
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type='email'
									placeholder='Введите email'
									disabled={isLoadingReset}
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
				<Button type='submit' disabled={isLoadingReset}>
					Сбросить пароль
				</Button>
			</form>
		</Form>
	)
}
