import type { Metadata } from "next";
import "./globals.css";
import ThemeProv from "@/context/ThemeProv";
import SocialIcons from "@/components/layouts/SocialIcons";
import { Cairo } from '@next/font/google'

const cairo = Cairo({ weight: ["600", "700", "800"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "صباغ الكويت 51108895 - صباغ شاطر - صباغ رخيص",
  description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية في جميع مناطق الكويت. مع خبرة سنوات، نقدم لك أفضل الحلول لتلوين وتجديد منازلك ومكاتبك بأعلى جودة وبأسعار تنافسية..",
  robots: "index,follow",
  keywords: "صباغ الكويت ,صباغ شاطر ,صباغ رخيص ,صبغ بدون رائحة ,معلم اصباغ ,صباغ في الكويت , صباغ شاطر في الكويت ,صباغ رخيص في الكويت ,اصباغ الكويت ,جميع انواع الاصباغ الحديثة, اصباغ داخلية وخارجية, صبغ مطفى, صبغ لماع, صبغ بداغ صبحان بالكويت ,صباغ الفنيطيس بالكويت ,صباغ المسائل بالكويت ,صباغ العدان بالكويت ,صباغ السلام بالكويت ,صباغ الظهر بالكويت ,صباغ أبو خليفة بالكويت ,صباغ حولي ",
  // keywords:"صباغ الكويت هو صباغ شاطر ورخيص في جميع اماكن الكويت, معلم صباغ بالكويت, صباغ الكويت, اصباغ الراعي, صباغ رخيص, صباغ متميز, اصباغ وديكورات حديثة, صباغ الكويت, صباغ الكويت: خدمات دهان احترافية بأفضل الأسعار, صباغ, الكويت",
  // keywords: "صباغ الكويت ,صباغ شاطر ,صباغ رخيص ,صبغ بدون رائحة ,معلم اصباغ ,صباغ في الكويت , صباغ شاطر في الكويت ,صباغ رخيص في الكويت ,اصباغ الكويت ,جميع انواع الاصباغ الحديثة, اصباغ داخلية وخارجية, صبغ مطفى, صبغ لماع, صبغ بداغ صبحان بالكويت ,صباغ الفنيطيس بالكويت ,صباغ المسائل بالكويت ,صباغ العدان بالكويت ,صباغ السلام بالكويت ,صباغ الظهر بالكويت ,صباغ أبو خليفة بالكويت ,صباغ حولي",
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
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/about" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/aspagh" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-rakhis" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-shatir" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/muealim-sabagh" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alkuayt" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/aisbgh-alkuayt" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-shatir-bi-alkuayt" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/muealim-sabaagh-bi-alkuayt" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/faniy-sabagh" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-mumtaz-bi-alkuayt" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/dikurat-sabagh-lilkuayt" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/manazil-sabaagh-bi-alkuayt" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/shaqaq-sabaagh-bi-alkuayt" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-buyut-aitfal" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-rusumat-aitfal" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-rakhisat-bi-alkuayt" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/dihanat-alkuayt" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/tarkib-waraq-judran" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/asbagh-abwab-khashabia" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/muealim-jabs-burd" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alsaalimia" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-sabah-alsaalim" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-hawalli" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-jaber-alahmad" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-khaitan" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alfarwaniyah" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aljabriya" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alshaab" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-bayan" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-janoub-alsura" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-mubarak" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-mishref" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alzahraa" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alsiddiq" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-hateen" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-salwa" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alshuhadaa" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-al-salam" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-al-masila" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-almasayel" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-abu-alhasania" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-subhan" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-abu-ftaira" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-al-fintas" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-mubarak-al-kabeer" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alaqeela" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alfntas" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alraqa" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-abu-halifa" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alsabahiya" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-almanqaf" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-almahboula" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-al-ahmadi" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-al-khiran" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alfhahil" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alwafra" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-jaber-alali" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-fahad-alahmad" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aldaiya" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aldasma" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aldohah" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alkhaldiya" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alrawdah" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alrai" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alshuwaykh" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-asharq" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alshamiya" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alsurra" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alqadesiya" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alqurawan" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alfaihaa" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aladiliya" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alsulaybikhat" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-kaifan" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-qurtoba" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-ghranata" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-abdullah-al-salim" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-dasman" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-bneid-alqar" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alnahda" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alnuzha" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-almansouriya" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-mantiqa-al-ashira" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alandalus" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alqrean" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alkswor" />
        <link rel="canonical" href="https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aladaan" />

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
                "image": "https://apartment-paint-kuwait.mountain-egy.site/image.png",
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
