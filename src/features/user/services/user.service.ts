import { IUser } from '@/features/auth/types'
import { TypeSettingsSchemes } from '@/features/user/schemes'

import { api } from '@/shared/api'
import { API_URL } from '@/shared/constants'

class UserService {
	public async findProfile() {
		const response = await api.get<IUser>(API_URL.PROFILE)

		return response
	}

	public async updateProfile(body: TypeSettingsSchemes) {
		const response = await api.patch<IUser>(API_URL.PROFILE, body)

		return response
	}
}

export const userService = new UserService()
