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
      <body className={poppins.variable}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
