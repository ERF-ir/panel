import { NextResponse } from 'next/server'

export function middleware(request) {

    let token  = request.cookies.get('token')?.value

    if (!token)
    {
        return NextResponse.redirect(new URL('/admin/login', request.url))
    }


    return NextResponse.next()


}

export const config = {
    matcher: ['/home', '/content/:path*','/store/:path*','/login'],

}
