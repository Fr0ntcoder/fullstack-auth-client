import {
	TypeNewPasswordSchema,
	TypeResetPasswordSchema
} from '@/features/auth/schemes'
import { IUser } from '@/features/auth/types'

import { api } from '@/shared/api'
import { API_URL } from '@/shared/constants'

class ResetPasswordService {
	public async reset(body: TypeResetPasswordSchema, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined

		const response = await api.post<IUser>(
			API_URL.AUTH.RESET_PASSWORD,
			body,
			{
				headers
			}
		)

		return response
	}

	public async new(
		body: TypeNewPasswordSchema,
		token: string | null,
		recaptcha?: string
	) {
		const headers = recaptcha ? { recaptcha } : undefined

		const response = await api.post<IUser>(
			API_URL.AUTH.NEW_PASSWORD(token),
			body,
			{
				headers
			}
		)

		return response
	}
}

export const resetPasswordService = new ResetPasswordService()
