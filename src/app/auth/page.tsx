import { Metadata } from 'next'

import { AuthWrapper } from '@/features/auth/components/AuthWrapper'

export const metadata: Metadata = {
	title: 'Действие с аккаунтом'
}

export default function LoginPage() {
	return <AuthWrapper />
}
