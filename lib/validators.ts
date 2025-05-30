import {z} from 'zod'
import { formatNumberWithDecimals } from './utils'

const currency = z
    .string()
    .refine((value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimals(Number(value))), 'Price must be a number with two decimal places')




export const insertProductSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    slug: z.string().min(3, 'Slug must be at least 3 characters long'),
    category: z.string().min(3, 'Category must be at least 3 characters long'),
    brand: z.string().min(3, 'Brand must be at least 3 characters long'),
    description: z.string().min(10, 'Description must be at least 10 characters long'),
    stock: z.number().min(0, 'Stock must be at least 0'),
    images: z.array(z.string()).min(1, 'At least one image is required'),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency,
})

//sChema for signing users in
export const signInFormSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6,'Password must be at least 6 characters')
})

//  Schema for sign up a user
export const signUpFormSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6,'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6,'Confirm password must be at least 6 characters')


}).refine((data) => data.password ===data.confirmPassword, {
    message: "Password dont match",
    path: ['confirmPassword']
})