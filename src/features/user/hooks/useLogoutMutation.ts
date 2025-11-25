''

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { authService } from '@/features/auth/services'

import { APP_URL } from '@/shared/constants'
import { toastMessageError } from '@/shared/utils'

export const useLogoutMutation = () => {
	const router = useRouter()

	const { mutate: logout, isPending: isLoadingLogout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess() {
			toast.success('Вы успешно вышли из аккаунта')
			router.push(APP_URL.AUTH)
		},
		onError(error) {
			toastMessageError(error)
		}
	})

	return { logout, isLoadingLogout }
}
