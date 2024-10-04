import type { Metadata } from "next";
import "./globals.css";
import ThemeProv from "@/context/ThemeProv";
import SocialIcons from "@/components/layouts/SocialIcons";
import { Cairo } from '@next/font/google'

const cairo = Cairo({ weight: "600", subsets: ["latin"] })


export const metadata: Metadata = {
  title: "صباغ الكويت - خدمات رخيصة واحترافية",
  description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية في جميع مناطق الكويت. احجز الآن للحصول على أفضل النتائج.",
  keywords: "صباغ الكويت, أفضل صباغ في الكويت, خدمات صباغة الكويت, صباغ محترف ورخيص",
  robots: "index,follow",
  openGraph: {
    type: "website",
    locale: "ar",
    url: "https://apartment-paint-kuwait.mountain-egy.site",
    title: "صباغ الكويت - خدمات رخيصة واحترافية",
    description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية في جميع مناطق الكويت. احجز الآن للحصول على أفضل النتائج.",
    images: [
      {
        url: "https://apartment-paint-kuwait.mountain-egy.site/image.png",
        width: 1200,
        height: 630,
        alt: "صباغ الكويت",
      },
    ],
    siteName: "صباغ الكويت",
  },
  twitter: {
    card: "summary_large_image",
    title: "صباغ الكويت - خدمات رخيصة واحترافية",

    description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية في جميع مناطق الكويت. احجز الآن للحصول على أفضل النتائج.",

    images: "https://apartment-paint-kuwait.mountain-egy.site/image.png",
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

        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site" />

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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "صباغ الكويت - خدمات رخيصة واحترافية",
              "description": "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية في جميع مناطق الكويت. احجز الآن للحصول على أفضل النتائج.",
              "url": "https://apartment-paint-kuwait.mountain-egy.site",
              "address": {
                "addressCountry": "الكويت"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
