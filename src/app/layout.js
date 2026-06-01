export const metadata = {
  title: {
    default: "AlphaWithShivam — Stock Market Hindi Mein Sikho",
    template: "%s | AlphaWithShivam",
  },
  description:
    "Free stock market tools, blog articles aur resources — SIP calculator, income tax calculator, trading guides — Hindi mein beginners ke liye.",
  keywords: [
    "stock market hindi",
    "sip calculator",
    "income tax calculator",
    "trading guide hindi",
    "share market kya hai",
    "mutual fund calculator",
    "alphawithshivam",
  ],
  authors: [{ name: "Shivam Kumar" }],
  creator: "Shivam Kumar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://alphawithshivam.vercel.app",
    siteName: "AlphaWithShivam",
    title: "AlphaWithShivam — Stock Market Hindi Mein Sikho",
    description:
      "Free stock market tools, blog articles aur resources — beginners ke liye.",
    images: [
      {
        url: "https://alphawithshivam.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "AlphaWithShivam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlphaWithShivam — Stock Market Hindi Mein Sikho",
    description: "Free stock market tools aur articles — Hindi mein",
    images: ["https://alphawithshivam.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "oC1UGT7b1m1fnJQE6xTh6ge8m11YduCW302KpxxnvvQ", 
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}