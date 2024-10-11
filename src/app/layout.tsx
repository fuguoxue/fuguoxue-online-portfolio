import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import localFont from "next/font/local";
import "./globals.css";

// Local and Google fonts
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

const inconsolata = Inconsolata({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

export const metadata: Metadata = {
  title: "Fuguo's Media Space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inconsolata.variable} antialiased`}
      >
        {children} {/* Content will be rendered here */}
        <Analytics />
      </body>
    </html>
  );
}
