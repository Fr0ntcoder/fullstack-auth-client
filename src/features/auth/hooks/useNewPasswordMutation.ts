import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

import { TypeNewPasswordSchema } from '@/features/auth/schemes'
import { resetPasswordService } from '@/features/auth/services'

import { APP_URL } from '@/shared/constants'
import { toastMessageError } from '@/shared/utils'

interface INewPasswordMutation {
	data: TypeNewPasswordSchema
	recaptcha: string
}
export const useNewPasswordMutation = () => {
	const router = useRouter()
	const searchParams = useSearchParams()

	const token = searchParams.get('token')

	const { mutate: newPassword, isPending: isLoadingNew } = useMutation({
		mutationKey: ['new password'],
		mutationFn: ({ data, recaptcha }: INewPasswordMutation) =>
			resetPasswordService.new(data, token, recaptcha),
		onSuccess() {
			toast.success('Пароль успешно изменен', {
				description: 'Теперь вы можете войти в свой аккаунт'
			})
			router.push(APP_URL.DASHBOARD.SETTINGS)
		},
		onError(error) {
			toastMessageError(error)
		}
	})

	return { newPassword, isLoadingNew }
}
