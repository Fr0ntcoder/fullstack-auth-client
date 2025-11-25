'use client'

import { useState } from 'react'

import { AuthWrapper } from '@/features/auth/components/AuthWrapper'

import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { ResetPasswordForm } from './ResetPasswordForm'

export const Auth = () => {
	const [type, setType] = useState<'login' | 'register' | 'reset'>('register')

	switch (type) {
		case 'login':
			return (
				<AuthWrapper
					title='Войти в аккаунт'
					description='Чтобы войти в аккаунт введите свой email и пароль'
					bottomText='Если нет аккаунта?'
					bottomLinkText='Зарегистрироваться'
					onHandler={() => setType('register')}
				>
					<LoginForm onHandler={() => setType('reset')} />
				</AuthWrapper>
			)
		case 'register':
			return (
				<AuthWrapper
					title='Зарегистрироваться'
					description='Чтобы зарегистрироваться введите свой email и password'
					bottomText='Уже есть аккаунт?'
					bottomLinkText='Войти'
					onHandler={() => setType('login')}
				>
					<RegisterForm />
				</AuthWrapper>
			)
		case 'reset':
			return (
				<AuthWrapper
					title='Сброс пароля'
					description='Для сброса пароля,введите свою почту'
					bottomLinkText='Войти в аккаунт'
					onHandler={() => setType('login')}
				>
					<ResetPasswordForm />
				</AuthWrapper>
			)
	}
}
