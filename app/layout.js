import {manrope} from "@/app/fonts";
import "./globals.css";
import Script from "next/script";
import Head from "next/head"
import {GoogleAnalytics} from "nextjs-google-analytics";

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
    <GoogleAnalytics trackPageViews/>
    {/*Use manrope font across the site*/}
    <body className={manrope.className}>
    <link rel="icon" href="/favicon-32x32.png" sizes="any"/>
    {children}
    </body>
    </html>
  );
}