import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
import TitleLine from "../../../components/TitleLine";
import ImageWithCaption from "@/components/ImageWithCaption";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import { FaGamepad } from "react-icons/fa";
import { FaBlog } from "react-icons/fa6";

const projectName = "Bazaar.log";

export default function Main() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 min-h-screen m-4">
      <div className="col-span-1 md:col-span-4 lg:col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1">
        <ProjectInfoSection projectName={projectName} />
        <Link
          href="https://bazaar-log.vercel.app/"
          className="external-link supplementary"
          target="_blank"
        >
          <FaGamepad className="external-link-icon" />
          Play Bazaar.log Online
        </Link>
        <Link
          href="https://www.fuguosmediaspace.me/blogs/idm-thesis/"
          className="external-link supplementary"
          target="_blank"
        >
          <FaBlog className="external-link-icon" />
          Read Bazaar.log Blog
        </Link>
      </aside>
      <main className="col-span-1 md:col-span-3 p-4 mb-8">
        <div className="relative w-full pb-[56.25%] mb-4">
          <iframe
            width="full"
            height="auto"
            src="https://www.youtube.com/embed/t1BMlLcjaDw?si=CqOSj6gUsSIZdGuq"
            title="Bazaar.log video placeholder"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <ImageWithCaption
            src="/imgs/blogs/idm-thesis/wk6/1990s-2000s.jpg"
            alt="Bazaar.log image 1."
            caption="Bazaar.log image 1."
          />
          <ImageWithCaption
            src="/imgs/blogs/idm-thesis/wk6/2000s - 1.jpg"
            alt="Bazaar.log image 2."
            caption="Bazaar.log image 1."
          />
        </div>
        <section>
          <h3>Game Mechanism</h3>
        </section>
      </main>
      <div className="col-span-1 sm:hidden md:block lg:hidden"></div>
      <aside className="col-span-1 md:col-span-3 lg:col-span-1">
        <ProjectSwitch projectName={projectName} />
        <BackToTop />
      </aside>
    </div>
  );
}
