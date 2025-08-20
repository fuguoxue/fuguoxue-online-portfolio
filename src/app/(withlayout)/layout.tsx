import type { Metadata } from "next";
// import { Inconsolata } from "next/font/google";
import TitleLine from "@/components/TitleLine";
import BackToTop from "@/components/BackToTop";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";

// import localFont from "next/font/local";
// import "../globals.css";

// Local and Google fonts
// const geistSans = localFont({
//   src: "../fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// const inconsolata = Inconsolata({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-inconsolata",
// });

export const metadata: Metadata = {
  authors: [{ name: "Fuguo Xue", url: "https://www.fuguosmediaspace.me/" }],
  title: "Fuguo's Media Space",
  description:
    "Fuguo's online portfolio showcasing projects at the intersection of nature, technology, and human experience — from generative art to immersive installations and experimental games.",
  openGraph: {
    type: "website",
    url: "https://www.fuguosmediaspace.me/",
    title: "Fuguo's Media Space",
    description:
      "Fuguo's online portfolio showcasing projects at the intersection of nature, technology, and human experience — from generative art to immersive installations and experimental games.",
    images: [
      "https://www.fuguosmediaspace.me/imgs/hearing-the-forest/hearing-the-forest-cover.png",
    ],
  },
};

export default function WithLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
    //   <head>
    //     <link
    //       rel="icon"
    //       type="image/png"
    //       href="/my-favicon/favicon-48x48.png"
    //       sizes="48x48"
    //     />
    //     <link rel="icon" type="image/svg+xml" href="/my-favicon/favicon.svg" />
    //     <link rel="shortcut icon" href="/my-favicon/favicon.ico" />
    //     <link
    //       rel="apple-touch-icon"
    //       sizes="180x180"
    //       href="/my-favicon/apple-touch-icon.png"
    //     />
    //     <meta name="apple-mobile-web-app-title" content="Fuguo's Media Space" />
    //     <link rel="manifest" href="/my-favicon/site.webmanifest" />
    //   </head>
    //   <body
    //     className={`${geistSans.variable} ${geistMono.variable} ${inconsolata.variable} antialiased`}
    //   >
    //     <div className="grid grid-cols-1 lg:grid-cols-5 m-4">
    //       <div className="col-span-1 lg:col-span-5">
    //         <TitleLine />
    //       </div>
    //       <div className="col-span-1 sm:hidden md:hidden lg:block"></div>
    //       <main className="col-span-1 lg:col-span-3 p-4 mb-8">
    //         {children} {/* Content will be rendered here */}
    //       </main>
    //       <div className="col-span-1 sm:hidden md:block lg:hidden"></div>
    //       <div className="col-span-1 md:col-span-3 lg:col-span-1">
    //         <BackToTop />
    //       </div>
    //     </div>
    //     <Analytics />
    //     <SpeedInsights />
    //   </body>
    // </html>
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 m-4">
        <div className="col-span-1 lg:col-span-5">
          <TitleLine />
        </div>
        <div className="col-span-1 sm:hidden md:hidden lg:block"></div>
        <main className="col-span-1 lg:col-span-3 p-4 mb-8">
          {children} {/* Content will be rendered here */}
        </main>
        <div className="col-span-1 sm:hidden md:block lg:hidden"></div>
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <BackToTop />
        </div>
      </div>
    </>
  );
}
