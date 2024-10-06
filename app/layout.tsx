import type { Metadata } from "next";
import "./globals.css";
import ThemeProv from "@/context/ThemeProv";
import SocialIcons from "@/components/layouts/SocialIcons";
import { Cairo } from '@next/font/google'

const cairo = Cairo({ weight: "600", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "صباغ الكويت 51108895 - صباغ شاطر - صباغ رخيص",
  description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية في جميع مناطق الكويت. مع خبرة سنوات، نقدم لك أفضل الحلول لتلوين وتجديد منازلك ومكاتبك بأعلى جودة وبأسعار تنافسية..",
  robots: "index,follow",
  keywords: "صباغ الكويت ,صباغ شاطر ,صباغ رخيص ,صبغ بدون رائحة ,معلم اصباغ ,صباغ في الكويت , صباغ شاطر في الكويت ,صباغ رخيص في الكويت ,اصباغ الكويت ,جميع انواع الاصباغ الحديثة, اصباغ داخلية وخارجية, صبغ مطفى, صبغ لماع, صبغ بداغ صبحان بالكويت ,صباغ الفنيطيس بالكويت ,صباغ المسائل بالكويت ,صباغ العدان بالكويت ,صباغ السلام بالكويت ,صباغ الظهر بالكويت ,صباغ أبو خليفة بالكويت ,صباغ حولي",
  openGraph: {
    type: "website",
    locale: "ar",
    url: "https://apartment-paint-kuwait.mountain-egy.site",
    title: "صباغ الكويت 51108895 - صباغ شاطر - صباغ رخيص",
    description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية في جميع مناطق الكويت. مع خبرة سنوات، نقدم لك أفضل الحلول لتلوين وتجديد منازلك ومكاتبك بأعلى جودة.",
    images: [
      {
        url: "https://apartment-paint-kuwait.mountain-egy.site/image.png",
        width: 1200,
        height: 630,
        alt: "صباغ الكويت",
      },
    ],
    siteName: "apartment-paint-kuwait.mountain-egy.site",
  },
  twitter: {
    card: "summary_large_image",
    title: "صباغ الكويت 51108895 - صباغ شاطر - صباغ رخيص",
    description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية في جميع مناطق الكويت. مع خبرة سنوات، نقدم لك أفضل الحلول لتلوين وتجديد منازلك.",
    images: "https://apartment-paint-kuwait.mountain-egy.site/image.png",
  },
  manifest: "/manifest.json",
  authors: {
    name: "صباغ الكويت",
    url: "https://apartment-paint-kuwait.mountain-egy.site"
  },
  bookmarks: ["صباغ الكويت", "صباغ الكويت 51108895 - صباغ شاطر - صباغ رخيص", "صباغ", "الكويت"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"ar"} dir={"rtl"}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="content-language" content="ar" />
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
        <meta name="google-site-verification" content="X-PztMGTdyBvqrdgLU4z7Wj5BFO-19uxIwLCwtkCbfM" />
        {/* <GoogleAnalytics gaId="G-YYCCSJQ60Q" /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://apartment-paint-kuwait.mountain-egy.site",
                "name": "صباغ الكويت",
                "description": "صباغ الكويت ,افضل صباغ في الكويت لجميع لجميع انواع الاصباغ زيتي- مطفي- صبغ بدون رائحة مع افضل الاسعار ",
                "url": "https://apartment-paint-kuwait.mountain-egy.site",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "الكويت",
                  "addressLocality": "مدينة الكويت",
                  "addressRegion": "الكويت",
                  "postalCode": "00000",
                  "addressCountry": "kuwait"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 29.3759,
                  "longitude": 47.9774
                },
                "sameAs": [
                  "https://www.instagram.com/sameh6051/"
                ],
                "image": "https://dyerkwt1.com/image.png",
                "telephone": "51108895"
              },
            )
          }}
        />
      </head>
      <body className={cairo.className}>
        <ThemeProv>
          <SocialIcons />
          {children}
        </ThemeProv>


        {/* <script  async src="https://www.googletagmanager.com/gtag/js?id=G-YYCCSJQ60Q"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YYCCSJQ60Q');
            `,
          }}
        /> */}



      </body>
    </html>
  );
}
