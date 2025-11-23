import Link from 'next/link'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/shared/components/ui'
import { APP_URL } from '@/shared/constants'

import { SocialButton } from '../SocialButton'

export const LoginForm = () => {
	return (
		<Card className='w-full max-w-md'>
			<CardHeader>
				<CardTitle className='text-xl'>Войти в аккаунт</CardTitle>
				<CardDescription>
					Чтобы войти в аккантв введите свой email и пароль
				</CardDescription>
			</CardHeader>
			<CardContent>
				<SocialButton />
			</CardContent>
			<CardFooter className='flex items-center gap-2'>
				Если нет аккаунта?
				<Link href={APP_URL.AUTH.REGISTER} className='hover:underline'>
					Зарегистрироваться
				</Link>
			</CardFooter>
		</Card>
	)
}
