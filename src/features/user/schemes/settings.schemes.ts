import z from 'zod'

export const settingsSchemes = z.object({
	name: z.string().min(1, { message: 'Введите имя' }),
	email: z.email({ message: 'Введите email' }),
	isTwoFaсtorAuth: z.boolean()
})

export type TypeSettingsSchemes = z.infer<typeof settingsSchemes>
