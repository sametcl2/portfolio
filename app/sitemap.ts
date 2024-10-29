import { getExperiences } from "app/utils";

export const baseUrl = "https://sametsah.in";

export default async function sitemap() {
  let blogs = getExperiences().map((post) => ({
    url: `${baseUrl}/experiences/${post.slug}`,
    lastModified: post.metadata.quitDate,
  }));

  let routes = ["", "/experiences"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
