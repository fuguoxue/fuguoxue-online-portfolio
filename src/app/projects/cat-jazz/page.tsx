import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
import Image from "next/image";
import TitleLine from "../../../components/TitleLine";
import BackToTop from "@/components/BackToTop";
import ImageWithCaption from "@/components/ImageWithCaption";

const projectName = "Cat Jazz";

export default function Main() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 min-h-screen m-4">
      <div className="col-span-1 md:col-span-4 lg:col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1">
        <ProjectInfoSection projectName={projectName} />
      </aside>
      <main className="col-span-1 md:col-span-3 p-4 mb-8">
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
        <section>
          <h3>Inspiration</h3>
          <p className="italic">Cats Musical</p>
          <h3>Ideation</h3>
          <p>
            Cats&apos; behaviors can seem weird and funny, and people record
            them with tons of videos, GIFs, and memes on social media.{" "}
          </p>
          <p>
            By creating an experimental animation, I would like to convey the
            unique charm of cats. I also wrote a Jazz music piece to help
            narrate the elegance and humorous characteristics of cats.
          </p>
          <h4>Narrative Design</h4>
          <p>Part 1: cats wander in the dark.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <ImageWithCaption
              src="/imgs/cat-jazz/part1-1.gif"
              alt="GIF of animation part 1-1."
              caption=""
            />
            <ImageWithCaption
              src="/imgs/cat-jazz/part1-2.gif"
              alt="GIF of animation part 1-2."
              caption=""
            />
          </div>
          <p>Part 2: cats&apos; curiosity.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <ImageWithCaption
              src="/imgs/cat-jazz-cover.gif"
              alt="GIF of animation part 2-1."
              caption=""
            />
            <ImageWithCaption
              src="/imgs/cat-jazz/part2-2.gif"
              alt="GIF of animation part 2-2."
              caption=""
            />
          </div>
          <p>Part 3: cats party.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <ImageWithCaption
              src="/imgs/cat-jazz/part3-1.gif"
              alt="GIF of animation part 3-1."
              caption=""
            />
            <ImageWithCaption
              src="/imgs/cat-jazz/part3-2.gif"
              alt="GIF of animation part 3-2."
              caption=""
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
