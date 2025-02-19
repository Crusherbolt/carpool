'use server'

import { cookies } from 'next/headers'
import { prisma } from '@/lib/db'
import { hash, compare } from 'bcrypt'

export async function signUp(name: string, email: string, password: string) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      throw new Error('Email already exists')
    }

    const hashedPassword = await hash(password, 10)
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    // Set session cookie
    cookies().set('userId', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60, // 1 week
    })

    return { success: true, user: { id: user.id, name: user.name, email: user.email } }
  } catch (error) {
    return { success: false, error: (error as Error).message }
  }
}

export async function login(email: string, password: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      throw new Error('Invalid credentials')
    }

    const isValid = await compare(password, user.password)
    if (!isValid) {
      throw new Error('Invalid credentials')
    }

    // Set session cookie
    cookies().set('userId', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60, // 1 week
    })

    return { success: true, user: { id: user.id, name: user.name, email: user.email } }
  } catch (error) {
    return { success: false, error: (error as Error).message }
  }
}