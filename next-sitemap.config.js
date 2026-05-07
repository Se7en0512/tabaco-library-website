/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tclic.ph', // Replace with actual domain
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://tclic.ph/server-sitemap.xml',
    ],
  },
}