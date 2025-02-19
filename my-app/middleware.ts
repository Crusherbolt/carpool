import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userId = request.cookies.get('userId')

  // Add paths that require authentication
  const protectedPaths = ['/dashboard', '/schedule', '/bid']

  if (protectedPaths.some(path => request.nextUrl.pathname.startsWith(path)) && !userId) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/schedule/:path*', '/bid/:path*'],
}