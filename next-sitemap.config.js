module.exports = {
    siteUrl: 'https://www.stellarmetalworks.com',
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/admin/**'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: '*',
                disallow: '/admin',
            },
        ],
    },
};