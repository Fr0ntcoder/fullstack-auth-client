import { api } from '@/shared/api'
import { API_URL } from '@/shared/constants'

class VerificationService {
	public async newVerification(token: string | null) {
		const response = await api.post(API_URL.AUTH.EMAIL, { token })

		return response
	}
}

export const verificationService = new VerificationService()
