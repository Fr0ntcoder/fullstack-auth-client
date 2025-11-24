import { useMutation } from '@tanstack/react-query'

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
		onSuccess(data: any) {
			toastMessageError(data)
		},
		onError(error) {
			toastMessageError(error)
		}
	})

	return { register, isLoadingRegister }
}
