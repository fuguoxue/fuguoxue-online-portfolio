import type { Metadata } from "next";
import TitleLine from "@/components/TitleLine";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

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
    <div className="grid min-h-dvh grid-cols-1
                    grid-rows-[auto_1fr_auto_auto]
                    lg:grid-cols-5
                    lg:grid-rows-[auto_1fr_auto] p-4">

      <header className="col-span-full">
        <TitleLine />
      </header>

      <main className="lg:col-start-2 lg:col-span-3 p-4 mb-8">
        {children}
      </main>

      <div className="lg:col-start-5 lg:row-start-2">
        <BackToTop />
      </div>

      <footer className="col-span-full p-4 flex items-center justify-center">
        <Footer />
      </footer>

    </div>
  );
}