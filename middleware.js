import { NextResponse } from 'next/server'

export function middleware(request) {
    const url = request.nextUrl.clone();
    if (url.pathname.startsWith("/_next/static/media")) {
        url.hostname = url.hostname.replace("cdn.", "")
    }
    return NextResponse.rewrite(url);
}