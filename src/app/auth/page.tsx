import { Metadata } from 'next'

import { Auth } from '@/features/auth/components'

export const metadata: Metadata = {
	title: 'Действие с аккаунтом'
}

export default function LoginPage() {
	return <Auth />
}
