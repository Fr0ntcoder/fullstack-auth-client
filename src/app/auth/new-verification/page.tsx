import { Metadata } from 'next'

import { VerificationForm } from '@/features/auth/components'

export const metadata: Metadata = {
	title: 'Подтвердить почту'
}

export default function NewVerificationPage() {
	return <VerificationForm />
}
