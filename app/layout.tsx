import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["紫微斗數", "八字", "占星", "人類圖", "命理", "解讀報告"],
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="font-sans antialiased">
        {children}
        <footer className="py-8 text-center text-gray-600 border-t border-gray-200">
          <p>© {new Date().getFullYear()} {siteConfig.creator} | {siteConfig.name}. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
