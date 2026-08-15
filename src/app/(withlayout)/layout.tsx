import type { Metadata } from "next";
import TitleLine from "@/components/TitleLine";
import BackToTop from "@/components/BackToTop";

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
