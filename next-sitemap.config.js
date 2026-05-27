/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.amodzporpertieslimited.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.amodzporpertieslimited.com/sitemap.xml',
    ],
  },
  exclude: ['/api/*'],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
}
