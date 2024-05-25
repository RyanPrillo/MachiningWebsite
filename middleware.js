import { NextResponse } from 'next/server'

export function middleware(request) {
    const url = request.nextUrl.clone();
    if (url.pathname.indexOf("/_next/static/media") > -1) {
        console.log("URL HERE:", url, "HOSTNAME HERE:", url.hostname, "TEST:", url.pathname.indexOf("/_next/static/media") > -1, "REWRITE:", NextResponse.rewrite(url));
        url.hostname = url.hostname.replace("cdn.", "")
    }

    return NextResponse.rewrite(url);
}