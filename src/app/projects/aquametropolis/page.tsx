import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
import Image from "next/image";
import TitleLine from "../../../components/TitleLine";
import BackToTop from "@/components/BackToTop";
import { RiOpenaiFill } from "react-icons/ri";
import Link from "next/link";

const projectName = "AquaMetropolis";

export default function Main() {
  return (
    <div className="grid grid-cols-5 m-4">
      <div className="col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1 p-4 sticky top-4">
        <ProjectInfoSection projectName={projectName} />

        <Link
          href="https://chatgpt.com/g/g-x99S0do7b-aquametropolis-guide"
          className="external-link"
        >
          <RiOpenaiFill className="external-link-icon" />
          Chat with AquaMetropolis Guide
        </Link>
      </aside>
      <main className="col-span-3 p-4 pb-[56.25%] mb-8">
        <Image
          src={`/imgs/aquametropolis-cover.gif`}
          alt={`AquaMetropolis`}
          width={400}
          height={400}
          className="w-full object-cover mb-8"
        />
        <div className="relative w-full pb-[56.25%] mb-8">
          <iframe
            width="full"
            height="auto"
            src="https://www.youtube.com/embed/KRVFeQgstpM?si=bQNnkA-VEh3XLIsm"
            title="WildWeb showcase Vimeo video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </main>
      <aside>
        <ProjectSwitch projectName={projectName} />
        <BackToTop />
      </aside>
    </div>
  );
}
