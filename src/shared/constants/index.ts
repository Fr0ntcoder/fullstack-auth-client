export const APP_URL = {
	AUTH: '/auth',
	DASHBOARD: {
		SETTINGS: '/dashboard/settings'
	}
}

export const API_URL = {
	AUTH: {
		LOGOUT: '/auth/logout',
		REGISTER: '/auth/register',
		LOGIN: '/auth/login',
		EMAIL: '/auth/email-confirmation',
		RESET_PASSWORD: '/auth/password-recovery/reset',
		NEW_PASSWORD: (token: string | null) =>
			`/auth/password-recovery/new/${token}`
	},
	PROFILE: '/users/profile',
	OAUTH: (text: string) => `/auth/oauth/connect/${text}`
}
