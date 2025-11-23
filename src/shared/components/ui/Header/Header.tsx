import { Container, ToogleTheme } from '@/shared/components/ui'

export const Header = () => {
	return (
		<Container className='flex justify-end py-3'>
			<ToogleTheme />
		</Container>
	)
}
