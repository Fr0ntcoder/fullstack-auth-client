'use client'

import { type PropsWithChildren } from 'react'

import { TanstackProvider } from './TanstackProvider'
import { ThemeProvider } from './ThemeProvider'
import { ToastProvider } from './ToastProvider'

export const Provider = ({ children }: PropsWithChildren<unknown>) => {
	return (
		<TanstackProvider>
			<ThemeProvider
				attribute='class'
				defaultTheme='light'
				disableTransitionOnChange
			>
				<ToastProvider />
				{children}
			</ThemeProvider>
		</TanstackProvider>
	)
}
