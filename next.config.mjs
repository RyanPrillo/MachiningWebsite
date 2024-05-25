/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
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
                    }
                ],
            },
        ];
    },
    assetPrefix: isProd ? 'https://cdn.stellarmetalworks.com' : '',
    images: {
        loader: 'custom',
        loaderFile: '/utils/imageLoader.js'
    },

    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.module.rules.push({
                test: /\.(png|jpg|gif|ico|jpeg|svg|woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            publicPath: (url) => {
                                if (url.startsWith('_next/static/media')) {
                                    return `/_next/static/media/${url}`;
                                }
                                return `${isProd ? 'https://cdn.stellarmetalworks.com' : ''}/${url}`;
                            }
                        },
                    },
                ],
            });
        }
    }
}

export default nextConfig;