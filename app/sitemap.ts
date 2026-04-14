import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://veroholland.com";
  const routes = ["", "/coaching", "/results", "/events", "/shop", "/about", "/contact"];
  return routes.map((r) => ({
    url: base + r,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: r === "" ? 1 : 0.8,
  }));
}
