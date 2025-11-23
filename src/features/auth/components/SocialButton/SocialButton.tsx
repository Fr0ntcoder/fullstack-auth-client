import { FaGoogle, FaYandex } from 'react-icons/fa'

import { Button } from '@/shared/components/ui'

export const SocialButton = () => {
	return (
		<div className='grid grid-cols-2 gap-4'>
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
