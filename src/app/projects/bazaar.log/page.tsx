import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
import TitleLine from "../../../components/TitleLine";
// import ImageWithCaption from "@/components/ImageWithCaption";
import ExpandableImage from "@/components/ExpandableImage";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import { FaGamepad } from "react-icons/fa";
import { FaBlog } from "react-icons/fa6";
import ImageWithCaption from "@/components/ImageWithCaption";

const projectName = "Bazaar.log";
const finalScreenshot = [
  {
    src: "/imgs/bazaar-log/finalScreenshots/1 - preInternet.png",
    description:
      "Game stage 1: Pre-Internet.\nBefore the graphical user interface (GUI) existence, human computer interaction is achieved via Command Line Interface (CLI).",
  },
  {
    src: "/imgs/bazaar-log/finalScreenshots/2 - web1990.png",
    description:
      "Game stage 2: GUI in 1990s.\nAs personal computers became popular in the 1990s, products like computers with GUIs and web services were lauched.",
  },
  {
    src: "/imgs/bazaar-log/finalScreenshots/3 - blueScreen.png",
    description:
      "Game stage 3: Blue Screen of Death (BSOD).\nBSOD is a critical screen in Windows indicating the system encounters a fatal error. The inspiration came from Y2K problem of computers misintepreting 2000 as 1900, which was a great concern of especially governments and IT corporations. Open source communities contributed to solving this problem in short time by leveraging collective wisdom online and organizing system updates at large scale.",
  },
  {
    src: "/imgs/bazaar-log/finalScreenshots/4 - web2000.png",
    description: "Game stage 4: interface featuring a Windows-XP-style look in the 2000s.",
  },
  {
    src: "/imgs/bazaar-log/finalScreenshots/5 - decision.png",
    description: "An in-game decision. There are several decision nodes throughout the game, where players need to make a decision in response to the open source news / events of that era. Each decision will lead players to either an instant game over or an approval of moving forward.",
  },
  {
    src: "/imgs/bazaar-log/finalScreenshots/6 - decisionResult.png",
    description: "Result of an in-game decision.",
  },
  {
    src: "/imgs/bazaar-log/finalScreenshots/7 - web2010.png",
    description: "Game stage 5: interface featuring a Windows-7-style look in the 2010s.",
  },
  {
    src: "/imgs/bazaar-log/finalScreenshots/8 - web2020.png",
    description: "Game stage 6: interface featuring a Windows-10-style look in the 2020s.",
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
        {/* Video */}
        <section>
          <div className="relative w-full pb-[56.25%] mb-4">
            <iframe
              width="full"
              height="auto"
              src="https://player.vimeo.com/video/1078799687?h=e891801699"
              title="Bazaar.log video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </section>

        {/* Context */}
        <section>
          <h3>
            Context: Open-Source Ecosystems and Internet Art in the Post-AI Age
          </h3>
          <p>
            Open-source culture and Internet art have grown rapidly alongside
            Internet technologies. However, with the rise of Generative AI in
            the 2020s, open-source communities face new challenges, such as
            ethical concerns and sustainability, while Internet art seems more
            adaptable — often embracing and experimenting with AI’s
            possibilities. This contrast inspired me to use the form of an
            interactive, browser-based game to both document and imagine the
            evolving landscape of open-source ecosystems, bridging research with
            speculative design.
          </p>
          <h4>Why should we care about open source?</h4>
          <p>The open source ecosystem supports many aspects of our modern society. It positively impacts organizations and individuals, and developers and users worldwide.</p>
        </section>
        {/* Outcome Overview */}
        <section>
          <h3>Outcome Overview</h3>
          <h4>Bazaar.log: A History-Based Game in Browser</h4>
          <p>
            To explore and communicate the evolving dynamics of the open source
            ecosystem, I developed Bazaar.log, a speculative simulation in the
            form of a browser-based game. This game functions as both a research
            prototype and a critical design intervention, aiming to provoke
            reflection on the sustainability and future development of open
            source ecosystems in the post-AI era.
          </p>
          <p>The experience begins in 1970, as ARPANET becomes available to academic institutions, marking the dawn of virtual connectivity. Players take on the role of a researcher working in a university computer lab. Using five core functions—news, notebook, local area network (LAN), calendar, and dashboard—players navigate key moments in the history of the Internet and open-source development. Along the way, they make decisions that shape their journey, leading to multiple possible endings that encourage reflection on how different choices might impact the open-source future.</p>
          <p>
            The name &quot;Bazaar.log&quot; consists of two parts. “Bazaar” is
            meant to to be a tribute to the book The Cathedral and The Bazaar by
            Eric S. Raymond, where Eric uses the metaphor of Bazaar to
            illustrate the structure of the open source software development;
            “.log” is a common extension for log files that record activities
            within a system or applications, so it functions as an interesting
            indication of the history-based game narrative.
          </p>
          <div className="w-1/2 h-auto drop-shadow-md m-auto">
            <ImageWithCaption
              src="/imgs/bazaar-log/Bazaar.log Poster.jpg"
              alt="Bazaar.log introduction diagram containing game timeline, UI design, player emotional arc, game functions, and methodology of using browser as gaming platform."
              caption="Diagram of Bazaar.log Game."
            />
          </div>
          <h5>Screenshots from Bazaar.log</h5>
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {finalScreenshot.map((img, index) => (
              <div key={index} className="w-full h-auto">
                <ExpandableImage
                  src={img.src}
                  alt={`Bazaar.log screenshot ${index + 1}`}
                  description={img.description}
                />
              </div>
            ))}
          </div>
          <h4>Brochure and Cards</h4>
          <ImageWithCaption
            src="/imgs/bazaar-log/derivatives/brochure-and-cards.jpg"
            alt=""
            widthPercentage={50}
            caption="Bazaar.log brochure and cards."
          />
          <div className="drop-shadow-md">
            <ExpandableImage
              src="/imgs/bazaar-log/derivatives/Brochure.jpg"
              alt=""
              description="Bazaar.log brochure designed for helping players navigate the first CLI-style game interface."
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="w-full h-auto drop-shadow-md">
              <ImageWithCaption
                src="/imgs/bazaar-log/derivatives/card-1-front-100.jpg"
                alt="Card of Y2K problem, front side."
                caption="Card 1 (front): Y2K Problem"
              />
            </div>
            <div className="w-full h-auto drop-shadow-md">
              <ImageWithCaption
                src="/imgs/bazaar-log/derivatives/card-1-back-100.jpg"
                alt="Card of Y2K problem, back side."
                caption="Card 1 (back): Y2K Problem"
              />
            </div>
            <div className="w-full h-auto drop-shadow-md">
              <ImageWithCaption
                src="/imgs/bazaar-log/derivatives/card-2-front-100.jpg"
                alt="Card of ASCII Art, front side."
                caption="Card 2 (front): Y2K Problem"
              />
            </div>
            <div className="w-full h-auto drop-shadow-md">
              <ImageWithCaption
                src="/imgs/bazaar-log/derivatives/card-2-back-100.jpg"
                alt="Card of ASCII Art, back side."
                caption="Card 2 (back): Y2K Problem"
              />
            </div>
          </div>
        </section>
        {/* TODO: Process */}
        {/* <section>
          <h3>Process</h3>
        </section> */}
      </main>
      <div className="col-span-1 sm:hidden md:block lg:hidden"></div>
      <aside className="col-span-1 md:col-span-3 lg:col-span-1">
        <ProjectSwitch projectName={projectName} />
        <BackToTop />
      </aside>
    </div>
  );
}
