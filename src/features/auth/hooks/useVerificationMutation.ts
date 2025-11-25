import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { verificationService } from '@/features/auth/services'

import { APP_URL } from '@/shared/constants'

export const useVerificationMutation = () => {
	const router = useRouter()

	const { mutate: verification } = useMutation({
		mutationKey: ['new verification'],
		mutationFn: (token: string | null) =>
			verificationService.newVerification(token),
		onSuccess() {
			toast.success('Почта успешно подтверждена')
			router.push(APP_URL.DASHBOARD.SETTINGS)
		},
		onError() {
			router.push(APP_URL.AUTH)
		}
	})

	return { verification }
}
