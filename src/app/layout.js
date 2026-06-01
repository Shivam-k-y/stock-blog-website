import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "AlphaWithShivam — Learn the Stock Market",
    template: "%s | AlphaWithShivam",
  },
  description:
    "Free stock market tools, blog articles, and resources — SIP calculator, income tax calculator, trading guides for beginners.",
  keywords: [
    "stock market",
    "sip calculator",
    "income tax calculator",
    "trading guide",
    "share market",
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
    title: "AlphaWithShivam — Learn the Stock Market",
    description:
      "Free stock market tools, blog articles, and resources for beginners.",
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
    title: "AlphaWithShivam — Learn the Stock Market",
    description: "Free stock market tools and articles",
    images: ["https://alphawithshivam.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "oC1UGT7b1m1fnJQE6xTh6ge8m11YduCW302KpxxnvvQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
