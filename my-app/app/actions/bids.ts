'use server'

import { cookies } from 'next/headers'
import { prisma } from '@/lib/db'

export async function placeBid(rideId: string, amount: number) {
  try {
    const userId = cookies().get('userId')?.value
    if (!userId) {
      throw new Error('Not authenticated')
    }

    const bid = await prisma.bid.create({
      data: {
        rideId,
        userId,
        amount,
      },
    })

    return { success: true, bid }
  } catch (error) {
    return { success: false, error: (error as Error).message }
  }
}

export async function getHighestBid(rideId: string) {
  try {
    const highestBid = await prisma.bid.findFirst({
      where: { rideId },
      orderBy: { amount: 'desc' },
    })

    return { success: true, amount: highestBid?.amount ?? 0 }
  } catch (error) {
    return { success: false, error: (error as Error).message }
  }
}





