import {
  ProjectInfoSection,
  ProjectSwitch,
} from "@/components/projectInfoSection";
import P5ShadowController from "@/components/P5TitleShadow";
import Image from "next/image";

export default function Main() {
  return (
    <div className="grid grid-cols-5 min-h-screen m-4">
      <aside className="col-span-1 p-4">
        <div className="sticky top-0">
          <P5ShadowController />
          <ProjectInfoSection projectName="The Surface City" />
          {/* <NavigationTab href="/" text="Home" arrowPosition="left" /> */}
        </div>
      </aside>
      <main className="col-span-3 p-4">
        <Image
          src={"/imgs/The-Surface-City-cover.gif"}
          alt={`The Surface City cover image`}
          width={400}
          height={400}
          objectFit="cover"
          className="w-full h-auto object-cover"
        />
      </main>
      <div className="col-span-1 p-4">
        <ProjectSwitch projectName="The Surface City" />
      </div>
    </div>
  );
}
