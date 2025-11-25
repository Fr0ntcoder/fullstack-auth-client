import { Metadata } from 'next'

import { SettingsForm } from '@/features/user/components'

export const metadata: Metadata = {
	title: 'Админ панель/настройки'
}

export default function SettingsPage() {
	return <SettingsForm />
}
