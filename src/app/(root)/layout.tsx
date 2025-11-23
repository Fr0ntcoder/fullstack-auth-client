import { ReactNode } from 'react'

import { Header } from '@/shared/components/ui/Header'

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<div className='flex h-full min-h-full flex-col'>
			<Header />
			<main className='flex-1'>{children}</main>
		</div>
	)
}
