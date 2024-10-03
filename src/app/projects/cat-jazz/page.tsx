import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
import Image from "next/image";
import TitleLine from "../../../components/TitleLine";

const projectName = "Cat Jazz";

export default function Main() {
  return (
    <div className="grid grid-cols-5 m-4">
      <div className="col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1 p-4 sticky top-4">
        <ProjectInfoSection projectName={projectName} />
      </aside>
      <main className="col-span-3 p-4 mb-8">
        <Image
          src={`/imgs/cat-jazz-cover.gif`}
          alt={`Cometale`}
          width={400}
          height={400}
          className="w-full object-cover mb-4"
        />
        <div className="relative w-full pb-[56.25%] mb-8">
          <iframe
            width="full"
            height="auto"
            src="https://player.vimeo.com/video/422028812?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="Cat Jazz video on Vimeo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </main>
      <div className="col-span-1 p-4">
        <ProjectSwitch projectName={projectName} />
      </div>
    </div>
  );
}
