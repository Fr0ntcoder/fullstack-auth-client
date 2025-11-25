'use client'

import { Loader2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { useVerificationMutation } from '@/features/auth/hooks'

export const VerificationForm = () => {
	const searchParams = useSearchParams()
	const token = searchParams.get('token')

	const { verification } = useVerificationMutation()

	useEffect(() => {
		verification(token)
	}, [])

	return (
		<div className='flex h-screen w-full flex-col items-center justify-center'>
			<h3 className='mb-5 text-5xl font-bold'>Подтверждение почты</h3>
			<Loader2 className='animate-spin text-4xl' />
		</div>
	)
}
