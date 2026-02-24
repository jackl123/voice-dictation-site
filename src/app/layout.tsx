import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} \u2014 ${siteConfig.tagline}`,
    template: `%s \u2014 ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "voice dictation mac",
    "macOS dictation app",
    "OpenAI Whisper",
    "voice to text",
    "private dictation",
    "bring your own API key",
    "speech to text mac",
  ],
  openGraph: {
    title: `${siteConfig.name} \u2014 ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} \u2014 ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-warm-50 font-sans text-warm-800 antialiased dark:bg-warm-900 dark:text-warm-300">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
