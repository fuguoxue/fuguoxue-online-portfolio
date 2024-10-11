import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
import TitleLine from "../../../components/TitleLine";
import ImageWithCaption from "@/components/ImageWithCaption";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const projectName = "Bones";

export default function Main() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 min-h-screen m-4">
      <div className="col-span-1 md:col-span-4 lg:col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1">
        <ProjectInfoSection projectName={projectName} />
        <Link
          href="https://github.com/fuguoxue/Bones/releases/tag/v1.0.0"
          className="external-link supplementary"
        >
          <FaGithub className="external-link-icon" />
          Download Game on GitHub
        </Link>
      </aside>
      <main className="col-span-1 md:col-span-3 p-4 mb-8">
        <div className="relative w-full pb-[56.25%] mb-4">
          <iframe
            width="full"
            height="auto"
            src="https://player.vimeo.com/video/756364409?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="Bones Game video on Vimeo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <ImageWithCaption
            src="/imgs/bones/low-poly-scene.gif"
            alt="3D Low-poly forest."
            caption="Low-poly forest."
          />
          <ImageWithCaption
            src="/imgs/bones/found-friends.gif"
            alt="Meet animal friends."
            caption="Meet animal friends."
          />
        </div>
        <section>
          <h3>Game Mechanism</h3>
          <h4>Bones Collection System</h4>
          <p>The bones are spawned randomly within the scene every time when a new round of game begins. The corgi collect a bone by contacting it.</p>
          <h4>HP System</h4>
          <p>Corgi&apos;s HP drops as time goes by.</p>
          <h4>Function Tabs</h4>
          <p>We added Pause, Resume, and Restart functions to provide better gaming experience.</p>
          <h4>Highest Score</h4>
          <p>The game records the player&apos;s highest score. The player can also reset the highest score.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ImageWithCaption
            src="/imgs/bones/game-mechanism.gif"
            alt="Bones collection and HP mechanisms."
            caption="Bones collection and HP mechanisms."
          />
          <ImageWithCaption
            src="/imgs/bones/function-tabs.gif"
            alt="Pause, Resume, and Restart."
            caption="Pause, Resume, and Restart."
          />
          <ImageWithCaption
            src="/imgs/bones/reset-highest-score.gif"
            alt="Reset the highest score."
            caption="Reset the highest score."
          />
        </div>
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
