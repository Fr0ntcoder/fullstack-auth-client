import { ComponentProps } from 'react'
import { FaGoogle, FaYandex } from 'react-icons/fa'

import { Button } from '@/shared/components/ui'
import { cn } from '@/shared/utils/clsx'

interface Props extends ComponentProps<'div'> {}

export const SocialButton = ({ className }: Props) => {
	return (
		<div className={cn(className, 'grid grid-cols-2 gap-4')}>
			<Button>
				<FaGoogle />
				Google
			</Button>
			<Button>
				<FaYandex />
				Яндекс
			</Button>
		</div>
	)
}
