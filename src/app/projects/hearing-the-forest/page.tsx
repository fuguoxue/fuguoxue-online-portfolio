"use client";
import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
import TitleLine from "../../../components/TitleLine";
import BackToTop from "@/components/BackToTop";
import ImageWithCaption from "@/components/ImageWithCaption";
import Image from "next/image";
import { FaItchIo } from "react-icons/fa";
import Link from "next/link";
import Slideshow from "@/components/Slideshow";
// Array of image paths
const playtestingPhotos = [
  "/imgs/hearing-the-forest/Weixin Image_20241215143419.jpg",
  "/imgs/hearing-the-forest/Weixin Image_20241215143428.jpg",
  "/imgs/hearing-the-forest/Weixin Image_20241215143446.jpg",
];
const projectName = "Hearing the Forest";

export default function Main() {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true); // Ensures iframe is rendered only on the client
  // }, []);

  const slidesImgs = [
    {
      image: "/imgs/hearing-the-forest/hearing-the-forest-cover.png",
      description: "",
    },
    {
      image:
        "/imgs/hearing-the-forest/screenshots/Screenshot 2025-04-01 171731.jpg",
      description: "",
    },
    {
      image:
        "/imgs/hearing-the-forest/screenshots/Screenshot 2025-04-01 171804.jpg",
      description: "",
    },
    {
      image:
        "/imgs/hearing-the-forest/screenshots/Screenshot 2025-04-05 164810.jpg",
      description: "",
    },
    {
      image:
        "/imgs/hearing-the-forest/screenshots/Screenshot 2025-04-05 164916.jpg",
      description: "",
    },
    {
      image:
        "/imgs/hearing-the-forest/screenshots/Screenshot 2025-04-05 164932.jpg",
      description: "",
    },
    {
      image:
        "/imgs/hearing-the-forest/screenshots/Screenshot 2025-04-05 165218.jpg",
      description: "",
    },
    {
      image:
        "/imgs/hearing-the-forest/screenshots/Screenshot 2025-04-05 165259.jpg",
      description: "",
    },
    {
      image:
        "/imgs/hearing-the-forest/screenshots/Screenshot 2025-04-05 165318.jpg",
      description: "",
    },
    {
      image:
        "/imgs/hearing-the-forest/screenshots/Screenshot 2025-04-05 165352.jpg",
      description: "",
    },
    {
      image:
        "/imgs/hearing-the-forest/screenshots/Screenshot 2025-04-05 165432.jpg",
      description: "",
    },
    {
      image:
        "/imgs/hearing-the-forest/screenshots/Screenshot 2025-04-05 165513.jpg",
      description: "",
    },
    {
      image:
        "/imgs/hearing-the-forest/screenshots/Screenshot 2025-04-06 131447.jpg",
      description: "",
    },
    {
      image:
        "/imgs/hearing-the-forest/screenshots/Screenshot 2025-04-06 131852.jpg",
      description: "",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 min-h-screen m-4">
      <div className="col-span-1 md:col-span-4 lg:col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1">
        <ProjectInfoSection projectName={projectName} />
        <Link
          href="https://oursblancitalien.itch.io/hearing-the-forest"
          className="external-link supplementary"
          target="_blank"
        >
          <FaItchIo className="external-link-icon" />
          Play Hearing the Forest on itch.io
        </Link>
      </aside>
      <main className="col-span-1 md:col-span-3 p-4 mb-8">
        <div className="relative w-full pb-[56.25%] mb-4">
          <iframe
            width="full"
            height="auto"
            src="https://www.youtube.com/embed/13Qh1f7Ym9o?si=V9Q3S468aM2Y9q6S"
            title="Tree of Growth video on YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        {/* <h3>Project Demo</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
            backgroundColor: "#000",
          }}
          className="w-full aspect-[3/2]"
        >
          {isClient && (
            <iframe
              src="https://itch.io/embed-upload/12446200?color=333333"
              allowFullScreen
              className="w-full h-full border-none"
            >
              <a href="https://oursblancitalien.itch.io/hearing-the-forest">
                Play Hearing the Forest on itch.io
              </a>
            </iframe>
          )}
        </div>
        <b>How to play:</b>
        <ol className="list-decimal ml-4">
          <li>Find an NPC in game.</li>
          <li>Press &quot;E&quot; to interact with the NPC.</li>
          <li>
            Left-click on a seed in seed repository obtained from the NPC.
          </li>
          <li>Face any direction and press &quot;T&quot; to plant a tree.</li>
        </ol> */}
        <Slideshow slides={slidesImgs} autoplay={true} />
        <section>
          <h3>Story, Inspiration & Ideation</h3>
          <p>
            Hearing the Forest is a digital immersive experience inspired by
            Chinese myths, particularly the story of the Moon, the Jade Rabbit,
            and the trees that grow there. In this experience, players journey
            into a silent forest on the edge of the Moon, guided by spirits and
            the mythical Jade Rabbit. As players interact with these spirits,
            they learn stories of the forest and receive unique seeds, each
            capable of growing into a tree with its own shape and color. As the
            trees grow, music notes emerge, syncing with their growth to create
            a serene, harmonious environment.
          </p>
          <p>
            The project is inspired by the Lantern Festival, a celebration
            marking the end of the Chinese Spring Festival. While the Lantern
            Festival is full of energy and light, my vision is to bring a quiet,
            dream-like introspective version of the festival to life. Here, the
            peaceful Moon casts its soft glow over the world, providing a
            tranquil atmosphere where players can connect with the ancient myths
            of China. By planting trees in this serene forest, players breathe
            new life into the world, much like the way the Moon&apos;s light
            brings calm to the night sky.
          </p>
        </section>
        <section>
          <h3>Production</h3>
          <h4>Procedural Generation for Terrain</h4>
          <p>
            To create a natural landscape while controlling workload, I used
            procedural generation for terrain generation. The terrain mesh was
            generated with a noise function from a predefined seed, so that the
            peaks and valleys look natural. The same function was also applied
            in generating the terrain material, whose color changes with
            altitude.
          </p>
          <h4>Tree Generation: Connection to Assistants API</h4>
          <p>
            Trees are one of my favorite imageries because it represents
            vitality and eternity. The branching patterns of trees are
            beautiful, and what&apos;s magical to me is that they can be
            simulated by algorithm. In the scene, I applied the L-systems
            algorithm for tree generation. I also trained an AI agent to
            generate L-system rules and send it to my scene via API, so that
            every seed contains a unique L-system rule capable of generating a
            unique tree pattern.
          </p>
          <p>
            There are two modes of seed generation: when the Assistant AI API is
            connected, seeds are generated real-time by Assistant AI; otherwise,
            seeds are randomly selected from a preset selection of seeds.
          </p>
          <ImageWithCaption
            src="/imgs/hearing-the-forest/Flowchart - Assistant AI Flowchart.jpg"
            alt="Seed generation flow powered by Assistant API."
            caption="Seed generation flow powered by Assistant API."
            widthPercentage={80}
          />
          <h4>Lightings and Post-Processing</h4>
          <p>
            To create a dream-like tranquil atmosphere, the scene is lit by
            lanterns with point light and other objects with emmisive materials.
            Post-processing modules like bloom, depth of field, vignette, and
            motion blurr also help enhancing the immersive gaming experience.
            Additional blue color fiter was included in underwater
            post-processing to simulate underwater perspective.
          </p>
          <h4>3D Audio and Real-time Audio</h4>
          <p>
            During the experience, each growing tree is accompanied by a unique
            chime audio. This is realized by the communication between a Max MSP patch and 
            Unity via OSC. The L-system rule is sent to the Max patch,
            each character in the rule mapping to a musical rules like
            ascending a key, adding a new channel, etc. This way, an audio is
            generated real-time as a tree grows.
          </p>
          <p>There are also 3D audios in the scene to enhance the sense of space and immersion, such as the water audio moving with the glowing Fish spirit.</p>
        </section>

        <section>
          <h3>Playtesting Documentation</h3>
          <ImageWithCaption
            src="/imgs/hearing-the-forest/Hearing the Forest Poster.png"
            alt="Playtesting session poster."
            caption="Poster for playtesting session."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {playtestingPhotos.map((imgSrc, index) => (
              <div key={index} className="w-full h-auto">
                <Image
                  src={imgSrc}
                  alt={`Photo ${
                    index + 1
                  } from Hearing the Forest project playtesting.`}
                  height={800}
                  width={800}
                />
              </div>
            ))}
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
