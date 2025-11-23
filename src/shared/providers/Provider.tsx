'use client'

import { type PropsWithChildren } from 'react'

import { ThemeProvider } from '@/shared/providers'

import { TanstackProvider } from './TanstackProvider'

export const Provider = ({ children }: PropsWithChildren<unknown>) => {
	return (
		<TanstackProvider>
			<ThemeProvider
				attribute='class'
				defaultTheme='light'
				disableTransitionOnChange
			>
				{children}
			</ThemeProvider>
		</TanstackProvider>
	)
}
