import type { Metadata } from "next";
import "./globals.css";
import ThemeProv from "@/context/ThemeProv";
import SocialIcons from "@/components/layouts/SocialIcons";
import { Cairo } from '@next/font/google'

const cairo = Cairo({ weight: "600", subsets: ["latin"] })


export const metadata: Metadata = {
  title: "صباغ الكويت",
  description: "صباغ الكويت هو صباغ شاطر ورخيص في جميع اماكن الكويت",
  keywords: "صباغ الكويت, صباغ الكويت في الكويت, صباغ الكويت في كويت",
  robots: "index,follow",
  openGraph: {
    type: "website",
    locale: "ar",
    url: "https://apartment-paint-kuwait.mountain-egy.site",
    title: "صباغ الكويت",
    description: "صباغ الكويت هو صباغ شاطر ورخيص في جميع اماكن الكويت",
    // images: [
    //   {
    //     url: "",
    //     width: 1200,
    //     height: 630,
    //     alt: "صباغ الكويت",
    //   },
    // ],
    siteName: "صباغ الكويت",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"ar"} dir={"rtl"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={cairo.className}>
        <ThemeProv>
          <SocialIcons />
          {children}
        </ThemeProv>
      </body>
    </html>
  );
}
