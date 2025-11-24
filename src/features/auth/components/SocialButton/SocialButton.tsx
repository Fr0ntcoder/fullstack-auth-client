'use client'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { ComponentProps } from 'react'
import { FaGoogle, FaYandex } from 'react-icons/fa'

import { authService } from '@/features/auth/services'
import { TypeAuthProvider } from '@/features/auth/types'

import { Button } from '@/shared/components/ui'
import { cn } from '@/shared/utils/clsx'

interface Props extends ComponentProps<'div'> {}

export const SocialButton = ({ className }: Props) => {
	const router = useRouter()

	const { mutateAsync } = useMutation({
		mutationKey: ['oauth'],
		mutationFn: async (provider: TypeAuthProvider) =>
			await authService.oauthByProvider(provider)
	})

	const onClick = async (provider: TypeAuthProvider) => {
		const response = await mutateAsync(provider)

		if (response) {
			router.push(response.url)
		}
	}
	return (
		<div className={cn(className, 'grid grid-cols-2 gap-4')}>
			<Button onClick={() => onClick('google')}>
				<FaGoogle />
				Google
			</Button>
			<Button onClick={() => onClick('yandex')}>
				<FaYandex />
				Яндекс
			</Button>
		</div>
	)
}
