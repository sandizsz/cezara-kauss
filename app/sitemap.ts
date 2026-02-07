import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cezarakauss.lv",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://cezarakauss.lv/registret-komandu",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://cezarakauss.lv/turnira-vesture",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://cezarakauss.lv/reglaments",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
