// import ImageWithCaption from "@/components/ImageWithCaption";
import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
// import Image from "next/image";
import TitleLine from "../../../components/TitleLine";
import BackToTop from "@/components/BackToTop";
import { FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";

const projectName = "SwipeX";

export default function Main() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 min-h-screen m-4">
      <div className="col-span-1 md:col-span-4 lg:col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1">
        <ProjectInfoSection projectName={projectName} />
        <Link
          href="https://www.newsmedialab.wkwsci.ntu.edu.sg/ProductPages/Swipex.html"
          className="external-link supplementary"
          target="_blank"
        >
          <FaLink className="external-link-icon" />
          Read more on SwipeX
        </Link>
        <Link
          href="https://github.com/ntu-news-media-lab/swipex"
          className="external-link supplementary"
          target="_blank"
        >
          <FaGithub className="external-link-icon" />
          SwipeX GitHub Page
        </Link>
      </aside>
      <main className="col-span-1 md:col-span-3 p-4 mb-8">
        <div className="relative w-full pb-[56.25%] mb-4">
          <iframe
            width="full"
            height="auto"
            src="https://www.youtube.com/embed/mlYvQh6tO0A?si=ZZ-UyhsrXqTKZVhd"
            title="SwipeX video on YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </main>
      <div className="col-span-1 sm:hidden md:block lg:hidden"></div>
      <aside className="col-span-1 md:col-span-3 lg:col-span-1">
        <ProjectSwitch projectName={projectName} />
        <BackToTop />
      </aside>
    </div>
  );
}
