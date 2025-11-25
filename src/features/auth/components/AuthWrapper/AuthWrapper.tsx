'use client'

import { ReactNode } from 'react'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/shared/components/ui'

interface Props {
	title: string
	description: string
	bottomText?: string
	bottomLinkText: string
	onHandler?: () => void
	children: ReactNode
}

export const AuthWrapper = ({
	title,
	description,
	bottomText,
	bottomLinkText,
	onHandler,
	children
}: Props) => {
	return (
		<Card className='w-full max-w-md'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>{children}</CardContent>
			<CardFooter className='flex items-center justify-center gap-2'>
				{bottomText}
				<a onClick={onHandler}>{bottomLinkText}</a>
			</CardFooter>
		</Card>
	)
}
