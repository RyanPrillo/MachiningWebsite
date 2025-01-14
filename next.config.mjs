/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    async headers() {
        if (!isProd) {
            return [];
        }

        return [
            {
                source: '/public/:path*',
                locale: false,
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000',
                    },
                ],
            },
        ];
    },
    assetPrefix: isProd ? 'https://cdn.stellarmetalworks.com' : '',
    images: isProd
        ? {
            loader: 'custom',
            loaderFile: './utils/imageLoader.js',
        } : {},
};

export default nextConfig;