import { IUser } from '@/features/auth/types'
import { TypeSettingsSchemes } from '@/features/user/schemes'

import { api } from '@/shared/api'
import { API_URL } from '@/shared/constants'

class UserService {
	public async findProfile() {
		try {
			const response = await api.get<IUser>(API_URL.PROFILE)

			return response
		} catch (error) {
			console.log(error)
			throw error
		}
	}

	public async updateProfile(body: TypeSettingsSchemes) {
		try {
			const response = await api.patch<IUser>(API_URL.PROFILE, body)

			return response
		} catch (error) {
			console.log(error)
			throw error
		}
	}
}

export const userService = new UserService()
