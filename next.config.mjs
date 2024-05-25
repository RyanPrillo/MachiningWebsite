/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    async headers() {
        if (!isProd) {
            return [];
        }

        return [
            {
                source: '/public/*',
                locale: false,
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000',
                    }
                ],
            },
            {
                source: "/_next/static/media/:path*",
                headers: [
                        {key: 'Access-Control-Allow-Origin', value: '*'},
                        {key: 'Access-Control-Allow-Methods', value: 'GET'},
                        {key: 'Access-Control-Allow-Headers', value: 'Content-Type'}
                ]
            }
        ];
    },
    assetPrefix: isProd ? 'https://cdn.stellarmetalworks.com' : '',
    images: {
        loader: 'custom',
        loaderFile: '/utils/imageLoader.js'
    }
}

export default nextConfig;