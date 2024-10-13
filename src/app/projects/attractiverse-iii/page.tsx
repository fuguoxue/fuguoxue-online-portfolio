import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
// import Image from "next/image";
import TitleLine from "../../../components/TitleLine";
import ImageWithCaption from "@/components/ImageWithCaption";
import BackToTop from "@/components/BackToTop";
import Slideshow from "@/components/Slideshow";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

const projectName = "Attractiverse-III";

const visualImgs = [
  {
    image: "/imgs/attractiverse-iii/Screenshot (5).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (7).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (8).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (9).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (10).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (11).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (12).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (13).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (14).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (15).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (16).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot (17).png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot 2024-03-25 112506.png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot 2024-03-25 112530.png",
    description: "",
  },
  {
    image: "/imgs/attractiverse-iii/Screenshot 2024-03-25 112746.png",
    description: "",
  },
];

const interactionImgs = [
  {image:"/imgs/attractiverse-iii/IMG_1405.jpg", description:""},
  {image:"/imgs/attractiverse-iii/IMG_1476.jpg", description:""},
  {image:"/imgs/attractiverse-iii/IMG_1485.jpg", description:""},
]

export default function Main() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 min-h-screen m-4">
      <div className="col-span-1 md:col-span-4 lg:col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1">
        <ProjectInfoSection projectName={projectName} />
        <Link
          href="https://www.harvestworks.org/livecodenyc2024-apr-26-may-5-exhibition/"
          className="external-link supplementary"
          target="_blank"
        >
          <FaLink className="external-link-icon" />
          Attractiverse-III on Governors Island
        </Link>
      </aside>
      <main className="col-span-1 md:col-span-3 p-4 mb-8">
        <div className="relative w-full pb-[56.25%] mb-4">
          <iframe
            width="full"
            height="auto"
            src="https://www.youtube.com/embed/0Q5l58vvP2A?si=KvBbQID6s8qkee7a"
            title="Tree of Growth video on YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <section>
          <h3>Visuals</h3>
          <p>
            The visuals are inspired by attractors. In dynamic systems
            mathematics, an attractor is a set of states toward which a system
            tends to evolve for a wide variety of starting conditions. Given a
            set of randomly positioned particles within a 3D space and an
            equation set defining the displacement of each particle per unit
            time, we shall see a stable 3D shape gradually evolving from the
            initial randomness as time progresses.
          </p>
          <p>
            I found a series of attractors on{" "}
            <span>
              <a
                href="http://www.3d-meier.de/tut19/Seite0.html"
                target="_blank"
                className="text-secondary hover:text-tag"
              >
                Jürgen Meier&apos;s website
              </a>
            </span>
            . Based on the attractor formulas, I coded several attractor systems
            in Max MSP and stylized them with colors and illuminations.{" "}
          </p>
          <Slideshow slides={visualImgs} />
        </section>
        <section>
          <h3>Interaction Design</h3>
          <p>
            I programmed my MIDI controller to provide control over the particle
            mesh.
          </p>
          <ImageWithCaption
            src="/imgs/attractiverse-iii/Attractiverse-III MIDI Instruction.png"
            alt="Schematic diagram of MIDI controller functions."
            caption=""
          />
        </section>
        <section>
          <h3>Setting Up the Scene</h3>
          <p>The exhibition was in an old 19th century private house on Governors Island, New York. The house used to belong to a General&apos;s family during the American Civil War.</p>
          <p>To fit into the scene, I wanted to set up a comfortable environment where people feel immersed in the beautiful meditative Attractiverse-III, and take a break from the real world.</p>
          <p>I chose to place my installation in a closet on the second floor. It was a small semi-private space. Behind the closet door, there is another universe.</p>
          <Slideshow slides={interactionImgs}/>
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
