import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
import Image from "next/image";
import TitleLine from "../../../components/TitleLine";

const projectName = "The Surface City";

export default function Main() {
  return (
    <div className="grid grid-cols-5 min-h-screen m-4">
      <div className="col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1 p-4 sticky top-4">
        <ProjectInfoSection projectName={projectName} />
        <ProjectSwitch projectName={projectName} />
      </aside>
      <main className="col-span-3 p-4">
        <div className="relative w-full pb-[56.25%] mb-8">
        <Image
                src={`/imgs/The-Surface-City-cover.gif`}
                alt={`The Suface City cover image`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
        </div>
      </main>
      <div className="col-span-1 p-4"></div>
    </div>
  );
}
