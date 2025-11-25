import { APP_URL } from '@/shared/constants'
import { NextRequest, NextResponse } from 'next/server'

export default function proxy(request: NextRequest) {
	const { url, cookies } = request

	const session = cookies.get('session')?.value

	const isAuth = url.includes('/auth')

	if (isAuth) {
		if (session) {
			return NextResponse.redirect(new URL('/dashboard/settings', url))
		}

		return NextResponse.next()
	}

	if (!session) {
		return NextResponse.redirect(new URL(APP_URL.AUTH, url))
	}
}

export const config = {
	matcher: ['/auth/:path*', '/dashboard/:path*']
}
