import {manrope} from "@/app/fonts";
import "./globals.css";
import Script from "next/script";
import Head from "next/head"

export const metadata = {
  metadataBase: new URL(`https://www.stellarmetalworks.com`),
  title: {
    template: '%s | Stellar Metal Machining',
    default: ` Stellar Metal Machining`,
  },
  alternates: {
    canonical: './',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
        strategy="afterInteractive"
    />
    <Script
        id="google-analytics"
        strategy="afterInteractive"
    >
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
        `}
    </Script>
    {/*Use manrope font across the site*/}
    <body className={manrope.className}>
    <link rel="icon" href="/favicon-32x32.png" sizes="any"/>
    {children}
    </body>
    </html>
  );
}