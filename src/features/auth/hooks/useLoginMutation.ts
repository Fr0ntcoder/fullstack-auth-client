import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { TypeLoginSchema } from '@/features/auth/schemes/login.schema'

import { API_URL } from '@/shared/constants'
import { toastMessageError } from '@/shared/utils'

import { authService } from '../services'

interface ILoginMutation {
	data: TypeLoginSchema
	recaptcha: string
}
export function useLoginMutation() {
	const router = useRouter()
	const { mutate: login, isPending: isLoadingLogin } = useMutation({
		mutationKey: ['login'],
		mutationFn: ({ data, recaptcha }: ILoginMutation) =>
			authService.login(data, recaptcha),
		onSuccess(data: any) {
			if (data.message) {
				toastMessageError(data)
			} else {
				toast.success('Вы успешно вошли в аккаунт')
				router.push(API_URL.DASHBOARD.SETTINGS)
			}
		},
		onError(error) {
			toastMessageError(error)
		}
	})

	return { login, isLoadingLogin }
}
