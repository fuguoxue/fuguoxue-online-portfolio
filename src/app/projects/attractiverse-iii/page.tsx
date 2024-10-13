import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
// import Image from "next/image";
import TitleLine from "../../../components/TitleLine";
// import ImageWithCaption from "@/components/ImageWithCaption";
import BackToTop from "@/components/BackToTop";
import Slideshow from "@/components/Slideshow";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

const projectName = "Attractiverse-III";

const imageSources = [
  {
    image: "/imgs/attractiverse-iii/Screenshot (5).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (7).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (8).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (9).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (10).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (11).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (12).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (13).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (14).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (15).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (16).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (17).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot 2024-03-25 112506.png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot 2024-03-25 112530.png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot 2024-03-25 112746.png",
    description: "",
  },
];

export default function Main() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 min-h-screen m-4">
      <div className="col-span-1 md:col-span-4 lg:col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1">
        <ProjectInfoSection projectName={projectName} />
        <Link
          href="https://www.harvestworks.org/livecodenyc2024-apr-26-may-5-exhibition/"
          className="external-link supplementary"
          target="_blank"
        >
          <FaLink className="external-link-icon" />
          Attractiverse-III on Governors Island
        </Link>
      </aside>
      <main className="col-span-1 md:col-span-3 p-4 mb-8">
        <div className="relative w-full pb-[56.25%] mb-4">
          <iframe
            width="full"
            height="auto"
            src="https://www.youtube.com/embed/0Q5l58vvP2A?si=KvBbQID6s8qkee7a"
            title="Tree of Growth video on YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <Slideshow slides={imageSources} />
      </main>
      <div className="col-span-1 sm:hidden md:block lg:hidden"></div>
      <aside className="col-span-1 md:col-span-3 lg:col-span-1">
        <ProjectSwitch projectName={projectName} />
        <BackToTop />
      </aside>
    </div>
  );
}
