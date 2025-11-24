export const APP_URL = {
	AUTH: '/auth'
}

export const API_URL = {
	AUTH: {
		LOGOUT: '/auth/logout',
		REGISTER: '/auth/register',
		LOGIN: '/auth/login'
	},
	DASHBOARD: {
		SETTINGS: '/dashboard/settings'
	},
  OAUTH: (text: string) => `/auth/oauth/connect/${text}`
}
