'use server'

import { cookies } from 'next/headers'
import { prisma } from '@/lib/db'

export async function scheduleRide(data: {
  source: string
  destination: string
  date: string
  time: string
  availableSeats: number
  price: number
}) {
  try {
    const userId = cookies().get('userId')?.value
    if (!userId) {
      throw new Error('Not authenticated')
    }

    const ride = await prisma.ride.create({
      data: {
        ...data,
        date: new Date(data.date),
        schedulerId: userId,
      },
    })

    return { success: true, ride }
  } catch (error) {
    return { success: false, error: (error as Error).message }
  }
}

export async function searchRides(data: {
  source: string
  destination: string
  date: string
}) {
  try {
    const rides = await prisma.ride.findMany({
      where: {
        source: data.source,
        destination: data.destination,
        date: {
          gte: new Date(data.date),
          lt: new Date(new Date(data.date).setDate(new Date(data.date).getDate() + 1)),
        },
        availableSeats: {
          gt: 0,
        },
      },
      include: {
        scheduler: {
          select: {
            name: true,
          },
        },
      },
    })

    return { success: true, rides }
  } catch (error) {
    return { success: false, error: (error as Error).message }
  }
}

export async function bookRide(rideId: string) {
  try {
    const userId = cookies().get('userId')?.value
    if (!userId) {
      throw new Error('Not authenticated')
    }

    const ride = await prisma.ride.findUnique({
      where: { id: rideId },
    })

    if (!ride) {
      throw new Error('Ride not found')
    }

    if (ride.availableSeats < 1) {
      throw new Error('No seats available')
    }

    const booking = await prisma.$transaction([
      prisma.booking.create({
        data: {
          rideId,
          userId,
          status: 'CONFIRMED',
        },
      }),
      prisma.ride.update({
        where: { id: rideId },
        data: {
          availableSeats: ride.availableSeats - 1,
        },
      }),
    ])

    return { success: true, booking }
  } catch (error) {
    return { success: false, error: (error as Error).message }
  }
}