import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { TypeSettingsSchemes } from '@/features/user/schemes'
import { userService } from '@/features/user/services'

import { toastMessageError } from '@/shared/utils'

export const useUpdateMutation = () => {
	const { mutate: update, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update'],
		mutationFn: (data: TypeSettingsSchemes) =>
			userService.updateProfile(data),
		onSuccess() {
			toast.success('Данные успешно обновлены')
		},
		onError(error) {
			toastMessageError(error)
		}
	})

	return { update, isLoadingUpdate }
}
