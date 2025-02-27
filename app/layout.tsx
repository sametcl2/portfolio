import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { baseUrl } from "./sitemap";
import { ThemeProvider } from "next-themes";
import { GoogleTagManager } from "@next/third-parties/google";
import Main from "./main";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Samet Sahin Portfolio",
    template: "%s | Samet Sahin Portfolio",
  },
  description: "Samet Sahin Portfolio website",
  openGraph: {
    title: "Samet Sahin Portfolio website",
    description: "Samet Sahin Portfolio website",
    url: baseUrl,
    siteName: "Samet Sahin Portfolio website",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
      suppressHydrationWarning
    >
      <GoogleTagManager gtmId="G-XTS218RD77" />
      <body className="antialiased max-w-xl mx-4 lg:mx-auto">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Main>{children}</Main>
        </ThemeProvider>
      </body>
    </html>
  );
}
