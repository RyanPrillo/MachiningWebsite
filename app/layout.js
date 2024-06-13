import {manrope} from "@/app/fonts";
import "./globals.css";
import Script from "next/script";

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
    <head>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}></Script>
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
        `}
      </Script>
    </head>
    {/*Use manrope font across the site*/}
    <body className={manrope.className}>
    <link rel="icon" href="/favicon-32x32.png" sizes="any"/>
    {children}
    </body>
    </html>
  );
}