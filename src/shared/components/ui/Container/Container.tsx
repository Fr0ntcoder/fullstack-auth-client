import { ComponentProps } from 'react'

import { cn } from '@/shared/utils/clsx'

interface Props extends ComponentProps<'div'> {}

export const Container = ({ children, className }: Props) => {
	return (
		<div className={cn(className, 'mx-auto w-full max-w-7xl px-5')}>
			{children}
		</div>
	)
}
