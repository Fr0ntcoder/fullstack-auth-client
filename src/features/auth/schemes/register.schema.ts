import z from 'zod'

export const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: 'Введите имя' }),
    email: z.email({ message: 'Введите email' }),
    password: z.string().min(6, {
      message: 'Пароль должен быть не менее 6 символов'
    }),
    passwordRepeat: z.string().min(6, {
      message: 'Пароль подтверждения должен быть не менее 6 символов'
    })
  })
  .refine(data => data.password === data.passwordRepeat, {
    message: 'Пароли не совпадают',
    path: ['passwordRepeat']
  })

export type TypeRegisterShema = z.infer<typeof RegisterSchema>
