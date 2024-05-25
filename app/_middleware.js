import { NextResponse } from 'next/server';

export function middleware(request) {
    const response = NextResponse.next();

    // Check if the request is for font files (.woff, .woff2, .ttf, etc.)
    if (/\.(woff|woff2|ttf|otf|eot)$/i.test(request.nextUrl.pathname)) {
        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    }

    return response;
}