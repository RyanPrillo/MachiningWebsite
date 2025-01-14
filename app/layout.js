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
    <GoogleAnalytics gaId="G-EBM68P9FBM"/>
    {/*Use manrope font across the site*/}
    <body className={manrope.className}>
    <link rel="icon" href="/favicon-32x32.png" sizes="any"/>
    {children}
    <footer className="bg-blue-900 text-white text-center p-4">
      <p>&copy; 2024 Stellar Metal Machining. All rights reserved.</p>
    </footer>
    </body>
    </html>
  );
}