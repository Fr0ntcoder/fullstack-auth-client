import { TypeRegisterSchema } from '@/features/auth/schemes'
import { TypeLoginSchema } from '@/features/auth/schemes/login.schema'
import { IUser, TypeAuthProvider } from '@/features/auth/types'

import { api } from '@/shared/api'
import { API_URL } from '@/shared/constants'

class AuthService {
	public async register(body: TypeRegisterSchema, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined

		try {
			const response = await api.post<IUser>(
				API_URL.AUTH.REGISTER,
				body,
				{
					headers
				}
			)

			return response
		} catch (error) {
			console.log(error)
			throw error
		}
	}

	public async login(body: TypeLoginSchema, recaptcha?: string) {
		const headers = recaptcha ? { recaptcha } : undefined

		try {
			const response = await api.post<IUser>(API_URL.AUTH.LOGIN, body, {
				headers
			})

			return response
		} catch (error) {
			console.log(error)
			throw error
		}
	}

	public async logout() {
		try {
			const response = await api.post(API_URL.AUTH.LOGOUT)

			return response
		} catch (error) {
			console.log(error)
			throw error
		}
	}

	public async oauthByProvider(provider: TypeAuthProvider) {
		try {
			const response = await api.get<{ url: string }>(
				API_URL.OAUTH(provider)
			)

			return response
		} catch (error) {
			console.log(error)
			throw error
		}
	}
}

export const authService = new AuthService()
