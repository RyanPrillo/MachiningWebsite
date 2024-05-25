import {manrope} from "@/app/fonts";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import Head from "next/head";

export const metadata = {
  title: "Stellar Metal Machining- Quality and Affordable Metal Work",
  description: "Metal Machine Shop",
  meta: "Stellar Metal Machining specializes in motor shaft repair, broken bolt removal, custom hardware, spindle repair, lathe work, drilling, and welding. We will work with you directly to get you exactly what you need.",
  icons: {
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    {/*Use manrope font across the site*/}
    <body className={manrope.className}>
    <link rel="icon" href="/favicon-32x32.png" sizes="any"/>
    {children}
    {/*<GoogleTagManager gtmId="G-EBM68P9FBM"/>*/}
    </body>
    </html>
  );
}
