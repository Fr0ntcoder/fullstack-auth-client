import { Metadata } from 'next'

import { AuthWrapper, NewPasswordForm } from '@/features/auth/components'

export const metadata: Metadata = {
	title: 'Изменить пароль'
}

export default function NewPasswordPage() {
	return (
		<AuthWrapper
			title='Новый пароль'
			description='Придумайте новый пароль для вашего аккаунта'
			bottomLinkText='Войти в аккаунт'
		>
			<NewPasswordForm />
		</AuthWrapper>
	)
}
