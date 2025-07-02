// "use client"

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.scss";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from './components/Footer';
import { DefaultSeo } from 'next-seo';

const poppins = Poppins({ subsets: ["latin"], variable: '--font-poppins', display: "swap", weight: ['300', '400', '500', '600', '700', '800'] });
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Artificial Labs",
  description: "Generative AI based creative powerhouse",
  robots: "index, follow",
  // type: "website",
  // url: "https://www.artificiallabs.in",
  // canonical: "https://www.artificiallabs.in",
  // image: "https://www.artificiallabs.in/artificial-logo.png",
  openGraph: {
    title: "Artificial Labs",
    description: "Generative AI based creative powerhouse",
    url: "https://www.artificiallabs.in",
    images: [
      {
        url: "https://www.artificiallabs.in/artificial-thumbnail.png",
        width: 1200,
        height: 630,
      }
    ]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MRL4X2MX');
          `
        }} />
        {/* End Google Tag Manager */}
      </head>
      <body className={poppins.variable}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MRL4X2MX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Footer />
        <script defer src="https://player.vimeo.com/api/player.js" />
      </body>
    </html>
  );
}
