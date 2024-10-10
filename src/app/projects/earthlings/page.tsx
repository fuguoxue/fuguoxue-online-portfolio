import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
import Image from "next/image";
import TitleLine from "../../../components/TitleLine";
import BackToTop from "@/components/BackToTop";
import ImageWithCaption from "@/components/ImageWithCaption";
import ExpandableImage from "@/components/ExpandableImage";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

const projectName = "Earthlings";
const animalImgs = [
  { src: "/imgs/earthlings/rooster.gif", description: "Rooster" },
  { src: "/imgs/earthlings/boar.gif", description: "Boar" },
  { src: "/imgs/earthlings/macaques.gif", description: "Macaques" },
  { src: "/imgs/earthlings/pigeons.jpg", description: "Pigeons" },
];
const boyGifs = [
  {
    src: "/imgs/earthlings/boy-idle-left.png",
    description: "Side view (idle)",
  },
  { src: "/imgs/earthlings/boy-left.gif", description: "Side view (moving)" },
  {
    src: "/imgs/earthlings/boy-idle-front.png",
    description: "Front view (idle)",
  },
  { src: "/imgs/earthlings/boy-front.gif", description: "Front view (moving)" },
  {
    src: "/imgs/earthlings/boy-idle-back.png",
    description: "Back view (idle)",
  },
  { src: "/imgs/earthlings/boy-back.gif", description: "Back view (moving)" },
];

export default function Main() {
  return (
    <div className="grid grid-cols-5 m-4">
      <div className="col-span-5">
        <TitleLine />
      </div>
      <aside>
        <ProjectInfoSection projectName={projectName} />
        <Link
          href="https://github.com/fuguoxue/Earthlings"
          className="external-link supplementary"
        >
          <FaGithub className="external-link-icon" />
          Download on Github and play
        </Link>
      </aside>
      <main className="col-span-3 p-4 mb-8">
        <Image
          src={`/imgs/earthlings-cover.gif`}
          alt={`Earthlings`}
          width={400}
          height={400}
          className="w-full object-cover mb-4"
        />
        <div className="relative w-full pb-[56.25%] mb-8">
          <iframe
            width="full"
            height="auto"
            src="https://player.vimeo.com/video/780223586?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="Earthlings video on Vimeo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <section>
          <h3>Inspiration</h3>
          <h4>Saving Wild Animals</h4>
          <p>
            The Australian Bushfire season lasting from June 2019 to May 2020
            caused unexpectedly large scale of environmental damages. Despite
            the tragic and irreparable damage caused by the fire, there were
            also many heart-warming moments. During the firefighting,
            firefighters did their utmost to rescue trapped creatures like
            koalas and kangaroos.
          </p>
          <h4>Living with Wild Animals</h4>
          <p>
            Since our university locates in the South West of Singapore with
            lush vegetation, we frequently see animals like boars, macaques, and
            various species of birds on campus.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {animalImgs.map((img, index) => (
              <div key={index} className="w-full h-auto">
                <ImageWithCaption
                  src={img.src}
                  alt={img.description}
                  caption={img.description}
                />
              </div>
            ))}
          </div>
          <p>
            However, we don&apos;t always live in harmony with the animals on
            campus.
          </p>
          <ImageWithCaption
            src="/imgs/earthlings/bad-macaque.jpg"
            alt="A macaque waiting for a chance to break into my room from the windows for food."
            caption="A macaque waiting for a chance to break into my room from the windows for food."
            widthPercentage={80}
          />
          <p>
            Due to frequent conflicts between macaques and students, the
            university finally relocated two of the macaques to a zoo.
          </p>
          <p>
            There are many kinds of relations between humans and animals,
            besides humans saving animals from danger and being angered by
            animals. However, although we often hear the concept of
            &quot;harmony between humans and animals&quot;, we believe that any
            existing relation cannot achieve this goal because the power of both
            parties is always unequal.
          </p>
          <p>
            Therefore, we would like to imagine another possibility for
            human-animal relations, one in which humans and animals do need to
            be interdependent, which may be achieved in an environment that
            requires both parties to use different abilities to survive. We
            named our game &quot;Earthlings&quot; because humans and animals are
            equal in the game, so much so that they can be referred to
            collectively as the same name.{" "}
          </p>
        </section>
        <section>
          <h3>Game Design & Development</h3>
          <h4>Storyline</h4>
          <p>
            The forest is on fire. The two characters, Deer and Boy, need to
            work together to collect as many magic stones as possible and escape
            the fire together before either of their HPs drops to zero.
          </p>
          <ExpandableImage
            src="/imgs/earthlings/Storyboard.png"
            alt="Storyboard screenshot."
            description="Storyboard screenshot."
          />
          <h4>Local Two-player Game</h4>
          <p>
            We incorporated the idea of human-animal cooperation into our games
            by implementing the two-player mode. While playing, two players can
            use different sets of keys on the same keyboard to control their
            characters.
          </p>
          <h4>2.5D + Pixel Art</h4>
          <p>
            We built the game in a 2.5D environment with pixel art. I was
            responsible for designing and making pixel sprites for the human
            character.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
            {boyGifs.map((img, index) => (
              <div key={index} className="w-full h-auto">
                <ImageWithCaption
                  src={img.src}
                  alt={img.description}
                  caption={img.description}
                />
              </div>
            ))}
          </div>
          <h4>Game Mechanism</h4>
          <h5>Game task: </h5>
          <ol className="list-decimal ml-6">
            <li>Collect as many magic stones as possible before exiting.</li>
            <li>Find the exit and escape from the fire scene.</li>
          </ol>
          <h5>Characters and Skills:</h5>
          <p>
            The human character (Boy) and the animal character (Deer) each has
            unique attributes and skills. Because Boy and Deer both have limited
            skills and weaknesses in their attributes, they have to cooperate in
            order to collect magic stones and escape from the fire scene.
          </p>
          <ImageWithCaption
            src="/imgs/earthlings/character-attrib-skills.png"
            alt="Deer and Boy have different attributes and skills."
            caption=""
            widthPercentage={70}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <ImageWithCaption src="/imgs/earthlings/Skillset-difference.gif" alt="Different skills." caption="Different skills." />
            <ImageWithCaption src="/imgs/earthlings/HP.gif" alt="Different HP mechanisms." caption="Different HP mechanisms." />
          </div>
          <h5>Multiple Endings</h5>
          <p>To add on to the replayability of the game, our team designed three different endings based on the number of magic stones collected and whether the two characters both escape from the fire scene before either of their HPs drops to zero.</p>
          <ImageWithCaption src="/imgs/earthlings/endings.png" alt="Three different endings based on level of completion of the game tasks." caption="Three different endings based on level of completion of the game tasks." />
          <p>I also designed three diffent pixel art scenes for the three endings.</p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
            <ImageWithCaption src="/imgs/earthlings/ending-perfect.png" alt="Perfect ending scene." caption="Perfect ending" />
            <ImageWithCaption src="/imgs/earthlings/ending-notBad.png" alt="Not bad ending scene." caption="Not bad ending" />
            <ImageWithCaption src="/imgs/earthlings/ending-failed.png" alt="Failed ending scene." caption="Failed ending" />
          </div>
        </section>
        <section>
        </section>
        <section>
          <h4>Pre-game Animation</h4>
          <p>
            To introduce players to our game story, I created a pre-game
            animation with Mental Canvas and Adobe Premier Pro.
          </p>
          <div className="relative w-full pb-[56.25%] mb-8">
            <iframe
              width="full"
              height="auto"
              src="https://player.vimeo.com/video/765940626?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              title="Earthlings video on Vimeo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </section>
      </main>
      <aside>
        <ProjectSwitch projectName={projectName} />
        <BackToTop />
      </aside>
    </div>
  );
}
