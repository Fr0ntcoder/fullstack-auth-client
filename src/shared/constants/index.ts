export const APP_URL = {
	AUTH: '/auth',
  DASHBOARD: {
		SETTINGS: '/dashboard/settings'
	},
}

export const API_URL = {
	AUTH: {
		LOGOUT: '/auth/logout',
		REGISTER: '/auth/register',
		LOGIN: '/auth/login',
		EMAIL: '/auth/email-confirmation'
	},
	OAUTH: (text: string) => `/auth/oauth/connect/${text}`
}
