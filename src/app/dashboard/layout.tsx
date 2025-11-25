import { ReactNode } from 'react'

import { Header } from '@/shared/components/ui'

export default function DashboardLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<div className='flex h-full min-h-full flex-col'>
			<Header />
			<main className='flex flex-1 items-center justify-center'>
				{children}
			</main>
		</div>
	)
}
