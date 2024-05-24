/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    async headers() {
        if (!isProd) {
            return [];
        }

        return [
            {
                source: '/:all*(css|js|gif|svg|jpg|jpeg|png|woff|woff2)',
                locale: false,
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000',
                    }
                ],
            }
        ];
    }
}

export default nextConfig;
