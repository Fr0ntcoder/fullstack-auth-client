import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { toastMessageError } from '@/shared/utils'

import { TypeRegisterSchema } from '../schemes'
import { authService } from '../services'

interface IRegisterMutation {
	data: TypeRegisterSchema
	recaptcha: string
}
export function useRegisterMutation() {
	const { mutate: register, isPending: isLoadingRegister } = useMutation({
		mutationKey: ['register'],
		mutationFn: ({ data, recaptcha }: IRegisterMutation) =>
			authService.register(data, recaptcha),
		onSuccess() {
			toast.success('Регистрация прошла успешно', {
				description: 'Проверьте свою почту и поддтвердите email'
			})
		},
		onError(error) {
			toastMessageError(error)
		}
	})

	return { register, isLoadingRegister }
}
