import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'
import { toast } from 'sonner'

import { TypeLoginSchema } from '@/features/auth/schemes/login.schema'

import { APP_URL } from '@/shared/constants'
import { toastMessageError } from '@/shared/utils'

import { authService } from '../services'

interface ILoginMutation {
	data: TypeLoginSchema
	recaptcha: string
}
export const useLoginMutation = (
	setIsTwoFactor: Dispatch<SetStateAction<boolean>>
) => {
	const router = useRouter()
	const { mutate: login, isPending: isLoadingLogin } = useMutation({
		mutationKey: ['login'],
		mutationFn: ({ data, recaptcha }: ILoginMutation) =>
			authService.login(data, recaptcha),
		onSuccess(data: any) {
			if (data.message) {
				toastMessageError(data)
				setIsTwoFactor(true)
			} else {
				toast.success('Вы успешно вошли в аккаунт')
				router.push(APP_URL.DASHBOARD.SETTINGS)
			}
		},
		onError(error) {
			toastMessageError(error)
		}
	})

	return { login, isLoadingLogin }
}
