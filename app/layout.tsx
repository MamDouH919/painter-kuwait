import type { Metadata } from "next";
import "./globals.css";
import ThemeProv from "@/context/ThemeProv";
import SocialIcons from "@/components/layouts/SocialIcons";
import { Cairo } from '@next/font/google'

const cairo = Cairo({ weight: ["600", "700", "800"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "صباغ الكويت 51108895 - صباغ شاطر ورخيص",
  description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة عالية وبأسعار تنافسية في جميع مناطق الكويت.",
  robots: "index,follow",
  keywords: "صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار",
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: "https://apartment-paint-kuwait.mountain-egy.site",
    title: "صباغ الكويت 51108895 - صباغ شاطر ورخيص",
    description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة عالية وبأسعار تنافسية.",
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
    title: "صباغ الكويت 51108895 - صباغ شاطر ورخيص",
    description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة عالية في جميع مناطق الكويت.",
    images: "https://apartment-paint-kuwait.mountain-egy.site/image.png",
  },
  manifest: "/manifest.json",
  authors: {
    name: "صباغ الكويت",
    url: "https://apartment-paint-kuwait.mountain-egy.site",
  },
  bookmarks: ["صباغ الكويت", "صباغ شاطر", "صباغ رخيص", "الكويت"],
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
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/" />

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
                "@graph": [
                  {
                    "@type": "WebPage",
                    "@id": "https://apartment-paint-kuwait.mountain-egy.site/",
                    "url": "https://apartment-paint-kuwait.mountain-egy.site/",
                    "name": "صباغ الكويت 51108895 صباغ شاطر ورخيص",
                    "isPartOf": { "@id": "https://apartment-paint-kuwait.mountain-egy.site#website" },
                    "primaryImageOfPage": { "@id": "https://apartment-paint-kuwait.mountain-egy.site/#primaryimage" },
                    "image": { "@id": "https://apartment-paint-kuwait.mountain-egy.site/#primaryimage" },
                    "thumbnailUrl": "https://apartment-paint-kuwait.mountain-egy.site/image.png",
                    "datePublished": "2020-12-29T13:47:49+00:00", "dateModified": "2024-10-01T07:59:36+00:00",
                    "description": "صباغ الكويت , هل تريد رقم صباغ شاطر ورخيص بالكويت ؟ نوفر لك افضل تصميمات وديكورات منزليه احترافيه فني تركيب ورق جدران ممتاز اتصل الان",
                    "breadcrumb": { "@id": "https://apartment-paint-kuwait.mountain-egy.site/#breadcrumb" },
                    "inLanguage": "ar",
                    "potentialAction": [{ "@type": "ReadAction", "target": ["https://apartment-paint-kuwait.mountain-egy.site/"] }]
                  },
                  {
                    "@type": "ImageObject",
                    "inLanguage": "ar",
                    "@id": "https://apartment-paint-kuwait.mountain-egy.site/#primaryimage",
                    "url": "https://apartment-paint-kuwait.mountain-egy.site/image.png",
                    "contentUrl": "https://apartment-paint-kuwait.mountain-egy.site/image.png",
                    "width": 600,
                    "height": 450,
                    "caption": "صباغ الكويت"
                  },
                  {
                    "@type": "BreadcrumbList",
                    "@id": "https://apartment-paint-kuwait.mountain-egy.site/#breadcrumb",
                    "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "الرئيسية" }]
                  },
                  {
                    "@type": "WebSite",
                    "@id": "https://apartment-paint-kuwait.mountain-egy.site/#website",
                    "url": "https://apartment-paint-kuwait.mountain-egy.site/",
                    "name": "صباغ الكويت",
                    "description": "صباغ الكويت 51108895 تركيب ورق جدران اصباغ الكوت صباغ شاطر ورخيص",
                    "potentialAction": [
                      {
                        "@type": "SearchAction",
                        "target": {
                          "@type": "EntryPoint",
                          "urlTemplate": "https://apartment-paint-kuwait.mountain-egy.site/{search_term_string}"
                        },
                        "query-input": "required name=search_term_string"
                      }
                    ]
                    , "inLanguage": "ar"
                  }
                ]
                // "@type": "WebPage",
                // "@id": "",
                // "name": "صباغ الكويت",
                // "description": "صباغ الكويت ,افضل صباغ في الكويت لجميع لجميع انواع الاصباغ زيتي- مطفي- صبغ بدون رائحة مع افضل الاسعار ",
                // "url": "https://apartment-paint-kuwait.mountain-egy.site",
                // "address": {
                //   "@type": "PostalAddress",
                //   "streetAddress": "الكويت",
                //   "addressLocality": "مدينة الكويت",
                //   "addressRegion": "الكويت",
                //   "postalCode": "00000",
                //   "addressCountry": "kuwait"
                // },

                // "geo": {
                //   "@type": "GeoCoordinates",
                //   "latitude": 29.3759,
                //   "longitude": 47.9774
                // },

                // "sameAs": [
                //   "https://www.instagram.com/sameh6051/"
                // ],
                // "image": "https://apartment-paint-kuwait.mountain-egy.site/image.png",
                // "telephone": "51108895"
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
