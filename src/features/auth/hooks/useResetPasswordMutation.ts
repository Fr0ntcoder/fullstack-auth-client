import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { TypeResetPasswordSchema } from '@/features/auth/schemes/reset-pasword.schema'
import { resetPasswordService } from '@/features/auth/services/reset-password.service'

import { toastMessageError } from '@/shared/utils'

interface IResetPasswordMutation {
	data: TypeResetPasswordSchema
	recaptcha: string
}
export const useResetPasswordMutation = () => {
	const { mutate: reset, isPending: isLoadingReset } = useMutation({
		mutationKey: ['reset password'],
		mutationFn: ({ data, recaptcha }: IResetPasswordMutation) =>
			resetPasswordService.reset(data, recaptcha),
		onSuccess() {
			toast.success('Проверьте почту', {
				description:
					'На вашу почту была отправлена ссылка на подтверждение'
			})
		},
		onError(error) {
			toastMessageError(error)
		}
	})

	return { reset, isLoadingReset }
}
