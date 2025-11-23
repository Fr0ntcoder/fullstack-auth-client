import { ReactNode } from 'react'

export default function AuthLayout({
	children,
	modal
}: Readonly<{
	children: ReactNode
	modal: ReactNode
}>) {
	return (
		<div className='flex h-full items-center justify-center'>
			{children}
		</div>
	)
}
