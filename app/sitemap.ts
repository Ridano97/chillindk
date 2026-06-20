import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.chillin.website";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/carte", "/brunchs", "/burgers", "/sale", "/douceurs", "/boissons", "/a-propos", "/contact"];

  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/carte" ? 0.9 : 0.7,
  }));
}
