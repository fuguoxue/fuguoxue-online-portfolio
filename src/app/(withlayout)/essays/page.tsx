import Link from "next/link";
// import { SeparationLine } from "@/components/webpageReusables";

export default function Main() {
  return (
    <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <h2 className="mb-4 col-span-1 md:col-span-3 lg:col-span-5">Essays</h2>

      <section className="col-span-1 md:col-span-3 lg:col-span-5 mb-4">
        <h3>New Media Art</h3>

        {/* Year and title should be in the same line on lg screens */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-5 gap-4">
          <p className="col-span-1 mb-4">2024</p>
          <Link
            href="https://www.proquest.com/docview/3215951167"
            className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
            target="_blank"
          >
            Open Source Ecosystem and Internet Art in the Post-AI Age
          </Link>
        </div>

        <div className="col-span-1 md:col-span-3 grid grid-cols-5 gap-4">
          <p className="col-span-1 mb-4">2023</p>
          <Link
            href="https://dr.ntu.edu.sg/handle/10356/167573"
            className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
            target="_blank"
          >
            Cometale - an interactive showcase of comets
          </Link>
        </div>
      </section>

      <section className="col-span-1 md:col-span-3  lg:col-span-5 mb-4">
        <h3>Game Analysis</h3>

        {/* Repeat same structure for other essays */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-5 gap-4">
          <p className="col-span-1 mb-4">2024</p>
          <Link
            href="/documents/Fuguo Xue - Functions of Fantasy_ An Analysis of VA-11 Hall-A_ Cyberpunk Bartender Action.pdf"
            className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
            target="_blank"
          >
            Functions of Fantasy: An Analysis of{" "}
            <i>VA-11 Hall-A: Cyberpunk Bartender Action</i>
          </Link>
        </div>

        <div className="col-span-1 md:col-span-3 grid grid-cols-5 gap-4">
          <p className="col-span-1 mb-4">2022</p>
          <Link
            href="/documents/Fuguo Xue - Avatars in A Plague Tale.pdf"
            className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
            target="_blank"
          >
            Avatars in <i>A Plague Tale: Innocence</i>
          </Link>
        </div>
      </section>
    </div>
  );
}
