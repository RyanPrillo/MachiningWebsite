export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/admin/',
            }
        ],
        sitemap: 'https://stellarmetalworks.com/sitemap.xml',
    }
}