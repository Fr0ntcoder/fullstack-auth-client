'use client'

import { useState } from 'react'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/shared/components/ui'

import { AUTH_DATA } from '../../constants/auth.data'
import { LoginForm } from '../LoginForm'
import { RegisterForm } from '../RegisterForm'
import { SocialButton } from '../SocialButton'

export const AuthWrapper = () => {
	const [type, setType] = useState<'login' | 'register'>('register')

	const onToggle = () => setType(type === 'login' ? 'register' : 'login')
	return (
		<Card className='w-full max-w-md'>
			<CardHeader>
				<CardTitle>{AUTH_DATA.title[type]}</CardTitle>
				<CardDescription>{AUTH_DATA.description[type]}</CardDescription>
			</CardHeader>
			<CardContent>
				<SocialButton className='mb-5' />
				{type === 'login' ? <LoginForm /> : <RegisterForm />}
			</CardContent>
			<CardFooter className='flex items-center justify-center gap-2'>
				{AUTH_DATA.footer[type]}
				<a onClick={onToggle}>{AUTH_DATA.link[type]}</a>
			</CardFooter>
		</Card>
	)
}
