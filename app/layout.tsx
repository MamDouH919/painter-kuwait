import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProv from "@/context/ThemeProv";
import SocialIcons from "@/components/layouts/SocialIcons";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&amp;display=swap" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProv>
          <SocialIcons />
          {children}
        </ThemeProv>
      </body>
    </html>
  );
}
