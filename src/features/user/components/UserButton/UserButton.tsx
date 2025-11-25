'use client'

import { LogOutIcon } from 'lucide-react'

import { useLogoutMutation } from '@/features/user/hooks'

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/shared/components/ui'
import { useProfile } from '@/shared/hooks'

import { UserButtonSkeleton } from './UserButtonSkeleton'

export const UserButton = () => {
	const { logout, isLoadingLogout } = useLogoutMutation()
	const { user, isLoading } = useProfile()
	console.log(user)
	if (!user) return null

	if (isLoading) return <UserButtonSkeleton />

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarImage src={user.picture} />
					<AvatarFallback>
						{user.displayName.slice(0, 1)}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-32'>
				<DropdownMenuItem
					disabled={isLoadingLogout}
					onClick={() => logout}
				>
					<LogOutIcon />
					Выйти
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
