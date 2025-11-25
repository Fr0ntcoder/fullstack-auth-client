import { UserButton } from '@/features/user/components'

import { Container, ToogleTheme } from '@/shared/components/ui'

export const Header = () => {
	return (
		<Container className='flex justify-end gap-5 py-3'>
			<ToogleTheme />
			<UserButton />
		</Container>
	)
}
