import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 1. Specify protected and public routes
const protectedRoutes = ['/app']
const publicRoutes = ['/login', '/signup', '/forgot-password', '/verify-email', '/']

export async function proxy(request: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = request.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route))
  const isPublicRoute = publicRoutes.some(route => path.startsWith(route))

  // 3. Check authentication status via Better Auth session
  try {
    const sessionCookie = request.cookies.get('better-auth.session_token')?.value
    
    if (isProtectedRoute && !sessionCookie) {
      // 4. Redirect to login if not authenticated
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('redirect', path)
      return NextResponse.redirect(loginUrl)
    }

    // 5. Redirect authenticated users from public auth pages to app
    if (isPublicRoute && sessionCookie && (path.startsWith('/login') || path.startsWith('/signup'))) {
      return NextResponse.redirect(new URL('/app', request.url))
    }
  } catch (error) {
    console.error('Proxy auth check failed:', error)
    
    // If there's an error checking auth and it's a protected route, redirect to login
    if (isProtectedRoute) {
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('redirect', path)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

// Routes Proxy should not run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api (API routes)
     */
    "/((?!_next/static|_next/image|favicon.ico|api).*)",
  ],
}
