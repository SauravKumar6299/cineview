import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email('Enter a valid email'),
  password: z.string().min(1, 'Password is required'),
})

export const sessionSchema = z.object({
  email: z.email(),
  token: z.string().min(1),
  issuedAt: z.number(),
})

export type LoginInput = z.infer<typeof loginSchema>