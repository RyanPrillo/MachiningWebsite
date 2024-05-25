import { NextResponse } from 'next/server'

export function middleware(request) {
    const url = request.nextUrl.clone();
    if (url.pathname.indexOf("/_next/static/media") > -1) {
        url.hostname = url.hostname.replace("cdn.", "")
    }
    return NextResponse.rewrite(url);
}