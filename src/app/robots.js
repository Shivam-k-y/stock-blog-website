export default function robots() {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: "/studio/",
      },
      sitemap: "https://alphawithshivam.vercel.app/sitemap.xml",
    }
  }