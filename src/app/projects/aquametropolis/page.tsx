import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
import Image from "next/image";
import TitleLine from "../../../components/TitleLine";
import BackToTop from "@/components/BackToTop";
import { RiOpenaiFill } from "react-icons/ri";
import Link from "next/link";
import Slideshow from "@/components/Slideshow";
import ImageWithCaption from "@/components/ImageWithCaption";

const projectName = "AquaMetropolis";
const midjourneyImgs = [
  {
    image: "/imgs/aquametropolis/jellyfish1.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/jellyfish2.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/jellyfish3.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/jellyfish4.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/skyscrapers1.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/skyscrapers2.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/skyscrapers3.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/skyscrapers4.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/skyscrapers5.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/skyscrapers6.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/skyscrapers7.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/submarine1.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/window.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/skyscrapers-fall.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/ruins.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/girl-in-front-of-window.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/fish-fleet1.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/fish-fleet2.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/fish-fleet3.png",
    description: "",
  },
  {
    image: "/imgs/aquametropolis/explode-1.png",
    description: "",
  },
];

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
          className="external-link supplementary"
        >
          <RiOpenaiFill className="external-link-icon" />
          Chat with AquaMetropolis Guide
        </Link>
      </aside>
      <main className="col-span-3 p-4 mb-8">
        <Image
          src={`/imgs/aquametropolis-cover.gif`}
          alt={`AquaMetropolis`}
          width={400}
          height={400}
          className="w-full object-cover mb-8"
        />
        <div className="relative w-full pb-[56.25%] mb-4">
          <iframe
            width="full"
            height="auto"
            src="https://www.youtube.com/embed/KRVFeQgstpM?si=bQNnkA-VEh3XLIsm"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>

        <section className="relative w-full mb-8">
          <h3>Inspiration</h3>
          <p>
            <i>
              Jude Chiu,{" "}
              <Link
                href={
                  "https://open.spotify.com/album/7Mj25Vp9Di3YbZntQmwwqh?si=YKnB4RFVRXiqk9QQ12SRbg"
                }
                className="text-tag underline"
              >
                The Last Aquarium
              </Link>
            </i>
          </p>
          <p>What if the animals in the songs are humanized and humans turn out to be the exhibits and consumables? An imagination of the power reversal between humans and marine animals.</p>
        </section>
        <section>
          <h3>Production</h3>
          <h4>ChatGPT</h4>
          <p>
            Since ChatGPT is good at forming ideas and stories, I communicated
            with it to form the storyline below.
          </p>
          <blockquote className="quote">
            <p>
              The film unfolds amidst the neon-lit, bioluminescent coral reefs
              of AquaMetropolis, where humans build their undersea cities
              alongside marine creatures that curiously observe their efforts.
              Initially, scenes appear tranquil, highlighting the coexistence
              between humans and marine life. However, as the narrative deepens,
              viewers witness the fragility of this equilibrium. One of the most
              poignant moments in &quot;AquaMetropolis&quot; occurs during a
              powerful underwater event—an awe-inspiring storm or a captivating
              marine migration. This event serves as a stark reminder of
              humanity&apos;s vulnerability and powerlessness in the face of
              nature&apos;s unyielding forces. The film captures the shock and
              humility that humans experience when confronted by the
              overwhelming beauty and strength of the natural world, urging us
              to reevaluate our place within it. &quot;AquaMetropolis&quot; is a
              visually stunning and emotionally charged exploration of a future
              where harmony with nature is a fragile yet deeply meaningful
              journey, all set against the backdrop of a Cyberpunk-inspired
              undersea world.
            </p>
          </blockquote>
          <h4>Midjourney</h4>
          <p>
            I used Midjourney for text-to-image generation because it is known
            for its well-trained aesthetics and various art styles.
          </p>
          <Slideshow slides={midjourneyImgs} />
          <h4>Pika Labs and Runway ML</h4>
          <p>
            I used Pika Labs and Runway ML for image-to-video generation, and
            eventually chose Pika Labs because it is free and stable.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="col-span-1">
              <ImageWithCaption
                src="/imgs/aquametropolis/girl-in-front-of-window.png"
                alt="Image generated with Midjourney. A girl in front of a window, looking at fish swimming outside."
                caption="Image generated with Midjourney. A girl in front of a window, looking at fish swimming outside."
              />
            </div>
            <div className="video-container col-span-1">
              <video width="100%" height="auto" controls muted>
                <source src="/imgs/aquametropolis/pika.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption className="text-center text-caption text-sm my-2">
                Video generated with Pika Labs based on Midjourney image.
              </figcaption>
            </div>
            <div className="video-container col-span-1">
              <video width="100%" height="auto" controls muted>
                <source
                  src="/imgs/aquametropolis/runway.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <figcaption className="text-center text-caption text-sm my-2">
                Video generated with Runway ML based on Midjourney image.
              </figcaption>
            </div>
          </div>

          <h4>Photoshop Generative Fill</h4>
          <p>
            I used Photoshop together with Midjourney for image generation,
            fine-tuning, and image expansion.Photoshop Generative Fill function
            allows me to specify what to fill in a specific range in the image
            and comes in handy for expanding the original image. While
            Midjourney&apos;s image-expanding function is usually of fixed size,
            Photoshop Generative Fill allows image expansion to any dimension
            required.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <ImageWithCaption src="/imgs/aquametropolis/skyscrapers5.png" alt="Original image by Midjouney. The image has water surface, but there should be no water surface in an underwater environment." caption="Original image by Midjouney. The image has water surface, but there should be no water surface in an underwater environment." />
            <ImageWithCaption src="/imgs/aquametropolis/skyscrapers5-expand.png" alt="Expanded the image with Photoshop Generative Fill. I also replaced watersurface with seafloor, and expand the image dimension." caption="Expanded the image with Photoshop Generative Fill. I also replaced watersurface with seafloor, and expand the image dimension." />
            <ImageWithCaption src="/imgs/aquametropolis/midjourney-portrait.png" alt="Portrait image generated with Midjourney." caption="Portrait image generated with Midjourney." />
            <ImageWithCaption src="/imgs/aquametropolis/ps.png" alt="Expanded the portrait background with Photoshop Generative Fill." caption="Expanded the portrait background with Photoshop Generative Fill." />
          </div>
          <h4>Audio & Video Editing</h4>
          <p>To generate narrated audio, I put the transcript into Elevenlabs, a text-to-speech AI tool. ElevenLabs provides many voices and allows voice customizations including Stability, Clarity+Similarity Enhancement, and Style Exaggeration. </p>
          <p>I used Stable Audio to generate the BGM and it worked better than my expectation. I used MyEdit for generating sound effects like the explosion sounds. </p>
          <p>For video editing, I tried Descript, Premiere Pro, and CapCut. I found CapCut most handy and efficient for my project.</p>
        </section>
      </main>
      <aside>
        <ProjectSwitch projectName={projectName} />
        <BackToTop />
      </aside>
    </div>
  );
}
