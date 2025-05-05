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
    description:
      "Game stage 4: interface featuring a Windows-XP-style look in the 2000s.",
  },
  {
    src: "/imgs/bazaar-log/finalScreenshots/7 - web2010.png",
    description:
      "Game stage 5: interface featuring a Windows-7-style look in the 2010s.",
  },
  {
    src: "/imgs/bazaar-log/finalScreenshots/8 - web2020.png",
    description:
      "Game stage 6: interface featuring a Windows-10-style look in the 2020s.",
  },
  {
    src: "/imgs/bazaar-log/finalScreenshots/5 - decision.png",
    description:
      "An in-game decision. There are several decision nodes throughout the game, where players need to make a decision in response to the open source news / events of that era. Each decision will lead players to either an instant game over or an approval of moving forward.",
  },
  {
    src: "/imgs/bazaar-log/finalScreenshots/6 - decisionResult.png",
    description: "Result of an in-game decision.",
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
            Context: Open Source Ecosystems and Internet Art in the Post-AI Age
          </h3>
          <p>
            Open source has long fueled software innovation and digital
            creativity through collaborative knowledge sharing. From early code
            exchanges in BYTE magazine to expansive online communities, it
            empowered not only developers but also new media artists who use
            Internet technologies—many of them open source—as expressive tools.
            However, in the post-AI age, open source communities face a
            sustainability crisis. As users shift toward generative AI and
            corporations profit from community-trained models without
            reciprocity, participation declines and the values of openness are
            increasingly challenged.
          </p>
          <h4>Why should we care about open source?</h4>
          <p>
            The open source ecosystem supports many aspects of our modern
            society. It positively impacts a wide range of entities, from
            government sectors and IT corporations to individuals as product
            developers and user.
          </p>
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
          <p>
            The experience begins in 1970, as ARPANET becomes available to
            academic institutions, marking the dawn of virtual connectivity.
            Players take on the role of a researcher working in a university
            computer lab. Using five core functions—news, notebook, local area
            network (LAN), calendar, and workstation—players navigate key moments
            in the history of the Internet and open source development. Along
            the way, they make decisions that shape their journey, leading to
            multiple possible endings that encourage reflection on how different
            choices might impact the open source future.
          </p>
          <p>
            The name &quot;Bazaar.log&quot; consists of two parts. “Bazaar” is
            meant to to be a tribute to the book The Cathedral and The Bazaar by
            Eric S. Raymond, where Eric uses the metaphor of Bazaar to
            illustrate the structure of the open source software development;
            “.log” is a common extension for log files that record activities
            within a system or applications, so it functions as an interesting
            indication of the history-based game narrative.
          </p>
          <div className="w-1/2 h-auto m-auto">
            <ExpandableImage
              src="/imgs/bazaar-log/Bazaar.log Poster.jpg"
              alt="Bazaar.log introduction diagram containing game timeline, UI design, player emotional arc, game functions, and methodology of using browser as gaming platform."
              description="Diagram of Bazaar.log Game."
              className="drop-shadow-md"
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
          <ExpandableImage
            src="/imgs/bazaar-log/derivatives/Brochure.jpg"
            alt=""
            description="Bazaar.log brochure designed for helping players navigate the first CLI-style game interface."
            className="drop-shadow-md"
          />
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <ImageWithCaption
              src="/imgs/bazaar-log/derivatives/card-1-front-100.jpg"
              alt="Card of Y2K problem, front side."
              caption="Card 1 (front): Y2K Problem"
              className="w-full h-auto drop-shadow-md"
            />
            <ImageWithCaption
              src="/imgs/bazaar-log/derivatives/card-1-back-100.jpg"
              alt="Card of Y2K problem, back side."
              caption="Card 1 (back): Y2K Problem"
              className="w-full h-auto drop-shadow-md"
            />
            <ImageWithCaption
              src="/imgs/bazaar-log/derivatives/card-2-front-100.jpg"
              alt="Card of ASCII Art, front side."
              caption="Card 2 (front): Y2K Problem"
              className="w-full h-auto drop-shadow-md"
            />
            <ImageWithCaption
              src="/imgs/bazaar-log/derivatives/card-2-back-100.jpg"
              alt="Card of ASCII Art, back side."
              caption="Card 2 (back): Y2K Problem"
              className="w-full h-auto drop-shadow-md"
            />
          </div>
        </section>
        {/* Process */}
        <section>
          <h3>Process</h3>
          <ExpandableImage
            src="/imgs/bazaar-log/Process.jpg"
            alt="Bazaar.log game development process diagram in the double diamond model."
            description="Diagram of Bazaar.log game development process."
            className="drop-shadow-md"
          />
        </section>
        {/* Challenges and Solutions */}
        <section>
          <h3>Challenges and Solutions</h3>
          <p>
            Bazaar.log has gone through several rounds of player feedback and
            iterations, each posed new challenges followed by solutions.
          </p>
          <h4>Challenge 1: information capacity</h4>
          <p>
            Incremental games have limited information capacity in my
            game&apos;s context, as the open source ecosystem is too complex to
            be boilded down to a few metrics.
          </p>
          <p>
            <b>Solution:</b>
            <ul className="list-disc ml-4">
              <li>
                Pivoted from incremental game to narrative game in order to
                deliver more contextual information.
              </li>
            </ul>
          </p>
          <h4>Challenge 2: effective storytelling</h4>
          <p>
            How to make the game look less like a boring history book and pique
            curiosity of players?
          </p>
          <p>
            <b>Solutions:</b>
            <ul className="list-disc ml-4">
              <li>
                Created non-linear storytelling mechanism, let player decisions
                matter for the game progress.
              </li>
              <li>
                Leveraged browser functions to enhance the fun of the game
                (pop-up windows, hyperlinks, etc.).
              </li>
            </ul>
          </p>
          <h4>Challenge 3: lack of guidance</h4>
          <p>
            Players can get lost in some interfaces like the Pre-Internet CLI
            screen.
          </p>
          <p>
            <b>Solutions:</b>
            <ul className="list-disc ml-4">
              <li>Developed optional in-game tutorials.</li>
              <li>
                Created physical user guide brochure in retrospective style.
              </li>
            </ul>
          </p>
        </section>
        {/* Conclusion */}
        <section>
          <h3>Conclusion</h3>
          <p>Upon my research and work, below are my takeaways.</p>
          <ul className="list-disc ml-4">
            <li>
              There are still needs for open source resources, but contributors
              are reluctant to contribute due to the existence of GenAI tools.
            </li>
            <li>
              GenAI changed the connections between artists and open source
              communities, but open source communities are still competitive due
              to their provision of accessible tools, communal learning
              environment, and networking opportunities.
            </li>
            <li>Open source sustainability matters for modern society.</li>
            <li>
              Players have a vague idea about the &quot;open source&quot;
              concept, and they are interested in learning more about its
              history. However, the game genre and interaction design matters in
              order to retain their curiosity and learning motivation.
            </li>
            <li>
              Bazaar.log has the potential to adopt an open source method for
              game development. This way, it will become a collection of
              memories and thoughts from the public about open source, and
              meaningfully contribute to a sustainable open source future.
            </li>
          </ul>
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
