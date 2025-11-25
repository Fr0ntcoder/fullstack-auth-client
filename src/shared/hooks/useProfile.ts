import { useQuery } from '@tanstack/react-query'

import { userService } from '@/features/user/services'

export const useProfile = () => {
	const { data: user, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.findProfile()
	})

	return { user, isLoading }
}
