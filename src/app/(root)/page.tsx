import Link from 'next/link'

import { buttonVariants } from '@/shared/components/ui/Button'

export default function HomePage() {
	return (
		<div className='flex min-h-full flex-col items-center justify-center'>
			<h1 className='mb-5 text-center text-4xl font-bold'>
				Главная страница
			</h1>
			<Link href='/auth/login' className={buttonVariants({ size: 'lg' })}>
				Войти в аккаунт
			</Link>
		</div>
	)
}
