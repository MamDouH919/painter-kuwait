import type { Metadata } from "next";
import "./globals.css";
import ThemeProv from "@/context/ThemeProv";
import SocialIcons from "@/components/layouts/SocialIcons";
import { Cairo } from 'next/font/google'

const cairo = Cairo({ weight: ["600", "700", "800"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "صباغ الكويت - 51108895 - صباغ شاطر ورخيص",
  description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة عالية وبأسعار تنافسية في جميع مناطق الكويت.",
  robots: "index,follow",
  keywords: "صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار",
  openGraph: {
    type: "article",
    authors: ["صباغ الكويت", "https://apartment-paint-kuwait.mountain-egy.site"],
    locale: "ar_AR",
    url: "https://apartment-paint-kuwait.mountain-egy.site",
    title: "صباغ الكويت - 51108895 - صباغ شاطر ورخيص",
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
    section: "خدمات صباغة",
    publishedTime: "2024-10-1T12:00:00Z", // Publication date of the article
    modifiedTime: "2024-10-10T14:00:00Z", // Last modified time (optional)
    alternateLocale: "ar"
  },
  twitter: {
    card: "summary_large_image",
    title: "صباغ الكويت - 51108895 - صباغ شاطر ورخيص",
    description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة عالية في جميع مناطق الكويت.",
    images: "https://apartment-paint-kuwait.mountain-egy.site/image.png",
  },
  manifest: "/manifest.json",
  authors: {
    name: "صباغ الكويت",
    url: "https://apartment-paint-kuwait.mountain-egy.site",
  },
  bookmarks: ["صباغ الكويت", "صباغ شاطر", "صباغ رخيص", "الكويت"],
  alternates: {
    canonical: "https://apartment-paint-kuwait.mountain-egy.site", // Canonical URL for SEO purposes
    languages: {
      "ar": "https://apartment-paint-kuwait.mountain-egy.site", // If you have an Arabic language version
    },
  },
  applicationName: "صباغ الكويت",
  creator: "mamdouh mohammed",
  category: "خدمات صباغة",
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
                    "name": "صباغ الكويت - 51108895 - صباغ شاطر ورخيص",
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
                    "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "الرئيسية",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "اصباغ",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/aspagh"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "صباغ رخيص",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-rakhis"
                      },
                      {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "صباغ شاطر",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-shatir"
                      },
                      {
                        "@type": "ListItem",
                        "position": 5,
                        "name": "معلم صباغ",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/muealim-sabagh"
                      },
                      {
                        "@type": "ListItem",
                        "position": 6,
                        "name": "صباغ الكويت",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 7,
                        "name": "اصباغ الكويت",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/aisbgh-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 8,
                        "name": "صباغ شاطر بالكويت",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-shatir-bi-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 9,
                        "name": "معلم صباغ في الكويت",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/muealim-sabaagh-bi-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 10,
                        "name": "فني صباغ الكويت",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/faniy-sabagh"
                      },
                      {
                        "@type": "ListItem",
                        "position": 11,
                        "name": "صباغ ممتاز بالكويت",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-mumtaz-bi-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 12,
                        "name": "صباغ ديكورات بالكويت",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/dikurat-sabagh-lilkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 13,
                        "name": "صباغ منازل بالكويت",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/manazil-sabaagh-bi-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 14,
                        "name": "صباغ شقق بالكويت",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/shaqaq-sabaagh-bi-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 15,
                        "name": "صباغ غرف اطفال",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-buyut-aitfal"
                      },
                      {
                        "@type": "ListItem",
                        "position": 16,
                        "name": "صباغ رسومات اطفال",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-rusumat-aitfal"
                      },
                      {
                        "@type": "ListItem",
                        "position": 17,
                        "name": "صباغ رخيص بالكويت",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-rakhisat-bi-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 18,
                        "name": "دهانات الكويت",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/dihanat-alkuayt"
                      },
                      {
                        "@type": "ListItem",
                        "position": 19,
                        "name": "تركيب ورق جدران",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/tarkib-waraq-judran"
                      },
                      {
                        "@type": "ListItem",
                        "position": 20,
                        "name": "اصباغ ابواب خشب",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/asbagh-abwab-khashabia"
                      },
                      {
                        "@type": "ListItem",
                        "position": 21,
                        "name": "معلم جبس بورد",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/muealim-jabs-burd"
                      },
                      {
                        "@type": "ListItem",
                        "position": 22,
                        "name": "صباغ السالمية",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alsaalimia"
                      },
                      {
                        "@type": "ListItem",
                        "position": 23,
                        "name": "صباغ صباح السالم",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-sabah-alsaalim"
                      },
                      {
                        "@type": "ListItem",
                        "position": 24,
                        "name": "صباغ حولي",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-hawalli"
                      },
                      {
                        "@type": "ListItem",
                        "position": 25,
                        "name": "صباغ جابر الاحمد",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-jaber-alahmad"
                      },
                      {
                        "@type": "ListItem",
                        "position": 26,
                        "name": "صباغ خيطان",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-khaitan"
                      },
                      {
                        "@type": "ListItem",
                        "position": 27,
                        "name": "صباغ الفروانية",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alfarwaniyah"
                      },
                      {
                        "@type": "ListItem",
                        "position": 28,
                        "name": "صباغ الجابرية",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aljabriya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 29,
                        "name": "صباغ الشعب",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alshaab"
                      },
                      {
                        "@type": "ListItem",
                        "position": 30,
                        "name": "صباغ بيان",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-bayan"
                      },
                      {
                        "@type": "ListItem",
                        "position": 31,
                        "name": "صباغ جنوب السرة",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-janoub-alsura"
                      },
                      {
                        "@type": "ListItem",
                        "position": 32,
                        "name": "صباغ مبارك",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-mubarak"
                      },
                      {
                        "@type": "ListItem",
                        "position": 33,
                        "name": "صباغ مشرف",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-mishref"
                      },
                      {
                        "@type": "ListItem",
                        "position": 34,
                        "name": "صباغ الزهراء",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alzahraa"
                      },
                      {
                        "@type": "ListItem",
                        "position": 35,
                        "name": "صباغ الصديق",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alsiddiq"
                      },
                      {
                        "@type": "ListItem",
                        "position": 36,
                        "name": "صباغ حطين",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-hateen"
                      },
                      {
                        "@type": "ListItem",
                        "position": 37,
                        "name": "صباغ سلوي",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-salwa"
                      },
                      {
                        "@type": "ListItem",
                        "position": 38,
                        "name": "صباغ الشهداء",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alshuhadaa"
                      },
                      {
                        "@type": "ListItem",
                        "position": 39,
                        "name": "صباغ السلام",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-al-salam"
                      },
                      {
                        "@type": "ListItem",
                        "position": 40,
                        "name": "صباغ المسلية",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-al-masila"
                      },
                      {
                        "@type": "ListItem",
                        "position": 41,
                        "name": "صباغ المسايل",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-almasayel"
                      },
                      {
                        "@type": "ListItem",
                        "position": 42,
                        "name": "صباغ ابو الحصاني",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-abu-alhasania"
                      },
                      {
                        "@type": "ListItem",
                        "position": 43,
                        "name": "صباغ صبحان",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-subhan"
                      },
                      {
                        "@type": "ListItem",
                        "position": 44,
                        "name": "صباغ ابو فطيرة",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-abu-ftaira"
                      },
                      {
                        "@type": "ListItem",
                        "position": 45,
                        "name": "صباغ الفينطيس",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-al-fintas"
                      },
                      {
                        "@type": "ListItem",
                        "position": 46,
                        "name": "صباغ مبارك الكبير",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-mubarak-al-kabeer"
                      },
                      {
                        "@type": "ListItem",
                        "position": 47,
                        "name": "صباغ العقيلة",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alaqeela"
                      },
                      {
                        "@type": "ListItem",
                        "position": 48,
                        "name": "صباغ الفنطاس",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alfntas"
                      },
                      {
                        "@type": "ListItem",
                        "position": 49,
                        "name": "صباغ الرقة",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alraqa"
                      },
                      {
                        "@type": "ListItem",
                        "position": 50,
                        "name": "صباغ ابو حليفة",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-abu-halifa"
                      },
                      {
                        "@type": "ListItem",
                        "position": 51,
                        "name": "صباغ الصباحية",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alsabahiya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 52,
                        "name": "صباغ المنقف",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-almanqaf"
                      },
                      {
                        "@type": "ListItem",
                        "position": 53,
                        "name": "صباغ المهبولة",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-almahboula"
                      },
                      {
                        "@type": "ListItem",
                        "position": 54,
                        "name": "صباغ الاحمدي",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-al-ahmadi"
                      },
                      {
                        "@type": "ListItem",
                        "position": 55,
                        "name": "صباغ الخيران",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-al-khiran"
                      },
                      {
                        "@type": "ListItem",
                        "position": 56,
                        "name": "صباغ الفحيحيل",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alfhahil"
                      },
                      {
                        "@type": "ListItem",
                        "position": 57,
                        "name": "صباغ الوفرة",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alwafra"
                      },
                      {
                        "@type": "ListItem",
                        "position": 58,
                        "name": "صباغ جابر العلي",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-jaber-alali"
                      },
                      {
                        "@type": "ListItem",
                        "position": 59,
                        "name": "صباغ فهد الاحمد",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-fahad-alahmad"
                      },
                      {
                        "@type": "ListItem",
                        "position": 60,
                        "name": "صباغ الدعية",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aldaiya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 61,
                        "name": "صباغ الدسمة",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aldasma"
                      },
                      {
                        "@type": "ListItem",
                        "position": 62,
                        "name": "صباغ الدوحة",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aldohah"
                      },
                      {
                        "@type": "ListItem",
                        "position": 63,
                        "name": "صباغ الخالدية",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alkhaldiya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 64,
                        "name": "صباغ الروضة",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alrawdah"
                      },
                      {
                        "@type": "ListItem",
                        "position": 65,
                        "name": "صباغ الري",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alrai"
                      },
                      {
                        "@type": "ListItem",
                        "position": 66,
                        "name": "صباغ الشويخ",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alshuwaykh"
                      },
                      {
                        "@type": "ListItem",
                        "position": 67,
                        "name": "صباغ الشرق",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-asharq"
                      },
                      {
                        "@type": "ListItem",
                        "position": 68,
                        "name": "صباغ الشامية",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alshamiya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 69,
                        "name": "صباغ السرة",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alsurra"
                      },
                      {
                        "@type": "ListItem",
                        "position": 70,
                        "name": "صباغ القادسية",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alqadesiya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 71,
                        "name": "صباغ القروان",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alqurawan"
                      },
                      {
                        "@type": "ListItem",
                        "position": 72,
                        "name": "صباغ الفيحاء",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alfaihaa"
                      },
                      {
                        "@type": "ListItem",
                        "position": 73,
                        "name": "صباغ العديلية",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aladiliya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 74,
                        "name": "صباغ الصليبخات",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alsulaybikhat"
                      },
                      {
                        "@type": "ListItem",
                        "position": 75,
                        "name": "صباغ كيفان",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-kaifan"
                      },
                      {
                        "@type": "ListItem",
                        "position": 76,
                        "name": "صباغ قرطبة",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-qurtoba"
                      },
                      {
                        "@type": "ListItem",
                        "position": 77,
                        "name": "صباغ غرناطة",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-ghranata"
                      },
                      {
                        "@type": "ListItem",
                        "position": 78,
                        "name": "صباغ ضاحية عبدالله السالم",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-abdullah-al-salim"
                      },
                      {
                        "@type": "ListItem",
                        "position": 79,
                        "name": "صباغ دسمان",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-dasman"
                      },
                      {
                        "@type": "ListItem",
                        "position": 80,
                        "name": "صباغ بنيد القار",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-bneid-alqar"
                      },
                      {
                        "@type": "ListItem",
                        "position": 81,
                        "name": "صباغ النهضة",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alnahda"
                      },
                      {
                        "@type": "ListItem",
                        "position": 82,
                        "name": "صباغ النزهة",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alnuzha"
                      },
                      {
                        "@type": "ListItem",
                        "position": 83,
                        "name": "صباغ المنصورية",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-almansouriya"
                      },
                      {
                        "@type": "ListItem",
                        "position": 84,
                        "name": "صباغ المنطقة العاشرة",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-mantiqa-al-ashira"
                      },
                      {
                        "@type": "ListItem",
                        "position": 85,
                        "name": "صباغ الاندلس",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alandalus"
                      },
                      {
                        "@type": "ListItem",
                        "position": 86,
                        "name": "صباغ القرين",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alqrean"
                      },
                      {
                        "@type": "ListItem",
                        "position": 87,
                        "name": "صباغ القصور",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-alkswor"
                      },
                      {
                        "@type": "ListItem",
                        "position": 88,
                        "name": "صباغ العدان",
                        "item": "https://apartment-paint-kuwait.mountain-egy.site/sabaagh-aladaan"
                      },
                    ]
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
      </body>
    </html>
  );
}
