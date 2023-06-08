/** @type {import('next-sitemap').IConfig} */
const siteUrl = "https://bezperesdach.ru";

const cleanParams = (params) => {
  let result = "";
  for (const item of params) {
    result += `\nClean-param: ${item}`;
  }
  return result;
};

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 2500,
  exclude: ["/ugolok-studenta/sitemap.xml"],
  robotsTxtOptions: {
    transformRobotsTxt: async (_, robotsTxt) =>
      `${robotsTxt}${cleanParams(["utm_referer&utm_ya_campaign&yabizcmpgn&utm_candidate&pt&_ym_status-check&_ym_lang&erid", "promo"])}`,
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/index.html",
          "/agreement",
          "/guarantees",
          "/work",
          "/assets/documents/processing-policy.pdf",
          "/uploads",
        ],
      },
    ],
    additionalSitemaps: [`${siteUrl}/ugolok-studenta/sitemap.xml`],
  },
};
