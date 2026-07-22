/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.amodzpropertieslimited.com',
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
  transform: async (config, path) => {
    // Custom priority for different pages
    const priorities = {
      '/': 1.0,
      '/about': 0.9,
      '/services': 0.9,
      '/properties': 0.9,
      '/plots': 0.9,
      '/contact': 0.9,
      '/projects': 0.8,
      '/gallery': 0.7,
      '/blog': 0.7,
      '/careers': 0.6,
      '/faq': 0.6,
      '/tenders': 0.6,
    }

    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: priorities[path] || 0.5,
      lastmod: new Date().toISOString(),
    }
  },
}
