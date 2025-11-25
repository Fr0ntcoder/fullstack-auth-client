'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { useUpdateMutation } from '@/features/user/hooks/useUpdateMutation'
import { TypeSettingsSchemes, settingsSchemes } from '@/features/user/schemes'

import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Switch
} from '@/shared/components/ui'
import { useProfile } from '@/shared/hooks'

export const SettingsForm = () => {
	const { user } = useProfile()
	const form = useForm<TypeSettingsSchemes>({
		mode: 'onChange',
		resolver: zodResolver(settingsSchemes),
		values: {
			name: user?.displayName || '',
			email: user?.email || '',
			isTwoFaсtorAuth: user?.isTwoFaсtorAuth || false
		}
	})
	const { update, isLoadingUpdate } = useUpdateMutation()

	const onSubmit = (data: TypeSettingsSchemes) => {
		update(data)
	}

	if (!user) return null

	return (
		<Card className='w-80'>
			<CardHeader className='flex flex-col items-start'>
				<CardTitle>Настройки профиля</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col space-y-5'
					>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Имя</FormLabel>
									<FormControl>
										<Input
											type='text'
											disabled={isLoadingUpdate}
											placeholder='Введите имя'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type='email'
											placeholder='Введите email'
											disabled={isLoadingUpdate}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='isTwoFaсtorAuth'
							render={({ field }) => (
								<FormItem>
									<div className='flex justify-between'>
										<FormLabel className='text-sm'>
											Двухфакторная аунтентификация
										</FormLabel>
										<FormControl>
											<Switch
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
									</div>
									<FormDescription className='text-xs'>
										Включить двухфакторную аунтентификацию
									</FormDescription>
								</FormItem>
							)}
						/>
						<Button type='submit' disabled={isLoadingUpdate}>
							Сохранить
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
