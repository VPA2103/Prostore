'use server'
import { prisma } from "@/db/prisma"
import { convertToPlaninObject } from "../utils"
import { LATEST_PRODUCTS_LIMIT } from "../constants"

export async function getLatestProducts(){
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {
            createdAt: 'desc'
        }
    })

    // Convert rating từ string sang number
    const convertedData = data.map(product => ({
        ...product,
        rating: parseFloat(product.rating) || 0 // Convert string to number
    }))

    return convertToPlaninObject(convertedData)
}

// get single product
// export async function getProductBySlug(slug: string)
// {
//     return await prisma.product.findFirst({
//         where: {slug: slug},
//     })
// }

export async function getProductBySlug(slug: string)
{
    const product = await prisma.product.findFirst({
        where: {slug: slug},
    })
    
    if (!product) return null
    
    // Convert rating cho single product cũng
    return {
        ...product,
        rating: parseFloat(product.rating) || 0
    }
}
