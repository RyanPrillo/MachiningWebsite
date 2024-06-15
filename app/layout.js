import {manrope} from "@/app/fonts";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

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
    <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`} />
    {/*Use manrope font across the site*/}
    <body className={manrope.className}>
    <link rel="icon" href="/favicon-32x32.png" sizes="any"/>
    {children}
    </body>
    </html>
  );
}