import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
// import Image from "next/image";
import TitleLine from "../../../components/TitleLine";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import Image from "next/image";
import ExpandableImage from "@/components/ExpandableImage";
import ImageWithCaption from "@/components/ImageWithCaption";
import Slideshow from "@/components/Slideshow";
import BackToTop from "@/components/BackToTop";

const projectName = "Cometale";
const natureImgs = [
  {
    src: "/imgs/cometale/jellyfish.jpg",
    description: "Phōs Graphé, JELLYFISH",
  },
  {
    src: "/imgs/cometale/nerve-cell.jpg",
    description:
      "Sharona Even-Ram, Cluster of neurons differentiated from embryonic stem cells",
  },
  {
    src: "/imgs/cometale/neural-cell-2.jpg",
    description: "Nerve Cell, Science Photo Library",
  },
  {
    src: "/imgs/cometale/style1.jpg",
    description:
      "John Matthias Kuehne, Electrical discharge patterns (positive charge)",
  },
  {
    src: "/imgs/cometale/style2.jpg",
    description:
      "John Matthias Kuehne, Electrical discharge patterns (negative charge)",
  },
  {
    src: "/imgs/cometale/style4.jpg",
    description: "Gyorgy Kepes, Lichtenberg figures: A. R. von Hippel",
  },
  {
    src: "/imgs/cometale/wheat.jpg",
    description: "Brian G. Kennedy, A Head of Wheat",
  },
  {
    src: "/imgs/cometale/wind+tunnel.jpg",
    description: "Heinrich Heidersberger, Windkanal",
  },
];
const AIImgs = [
  { image: "/imgs/cometale/02-11_2.png", description: "" },
  { image: "/imgs/cometale/02-13_1.png", description: "" },
  { image: "/imgs/cometale/02-13_1(1).png", description: "" },
  { image: "/imgs/cometale/02-13_1(2).png", description: "" },
  { image: "/imgs/cometale/02-13_2.png", description: "" },
  { image: "/imgs/cometale/02-13_2(1).png", description: "" },
  { image: "/imgs/cometale/02-13_4.png", description: "" },
  { image: "/imgs/cometale/02-13_6.png", description: "" },
  { image: "/imgs/cometale/02-13_7.png", description: "" },
  { image: "/imgs/cometale/02-13_8.png", description: "" },
  { image: "/imgs/cometale/02-16-1.png", description: "" },
  { image: "/imgs/cometale/02-20_1.png", description: "" },
  { image: "/imgs/cometale/02-20_2.png", description: "" },
  { image: "/imgs/cometale/03-31_3.png", description: "" },
  { image: "/imgs/cometale/03-31_4.png", description: "" },
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
          href="https://ars.electronica.art/who-owns-the-truth/en/cometale/"
          className="external-link supplementary"
          target="_blank"
        >
          <Image
            src="/imgs/ars-electronica-icon.png"
            alt="Ars Electronica Icon"
            width={15}
            height={15}
            className="object-contain flex-shrink-0 max-w-full max-h-full mr-2"
          />
          Cometale at Ars Electronica Festival 2023
        </Link>
        <Link
          href="https://dr.ntu.edu.sg/handle/10356/167573"
          className="external-link supplementary"
          target="_blank"
        >
          <FaBook className="external-link-icon" />
          Thesis Paper
        </Link>
      </aside>
      <main className="col-span-1 md:col-span-3 p-4 mb-8">
        <div className="relative w-full pb-[56.25%] mb-8">
          <iframe
            width="full"
            height="auto"
            src="https://player.vimeo.com/video/802800777?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="Cometale video on Vimeo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ImageWithCaption src="/imgs/cometale/Cometale Demo.jpg" alt="" caption="Photo of Cometale installation demo."/>
          <ImageWithCaption src="/imgs/cometale-cover.gif" alt="" caption="Effect of Cometale projection."/>
        </div>
        <section>
          <h3>Inspiration</h3>
          <h4>&quot;The Book of Silk&quot;</h4>
          <p>
            The ancient Chinese book &quot;Divination by Astrological and
            Meteorological Phenomena&quot; (also known as the Book of Silk) was
            compiled by Chinese astronomers during the Western Han Dynasty
            (202BC - 8AD).
          </p>
          <ExpandableImage
            src="/imgs/cometale/book-of-silk.png"
            alt="Image of the Book of Silk. "
            description="Divination by Astrological and Meteorological Phenomena. Photo credit: Hunan Museum in Changsha, China."
          />
          <p>
            The reading order of the Book of Silk is from right to left, top to
            bottom. Below is a brief listing of its content:
          </p>
          <ul className="italic list-disc ml-4">
            <li>Clouds (row 1 and beginning of row 2)</li>
            <li>Mirages (after the clouds, until the middle of row 2)</li>
            <li>
              Solar/moon halos (most of the content from the middle of row 2 to
              row 5, mostly damaged)
            </li>
            <li>Rainbows (mainly at the beginning of row 6)</li>
            <li>
              <b>Comets (most of row 6)</b>
            </li>
            <li>Stars (on both sides of the comet series in row 6)</li>
          </ul>
          <p>
            The divination book links each phenomenon with an important
            historical event so that future generations could use it as a
            reference to predict the future.
          </p>
          <p>
            Among all the phenomena, the comet series is best preserved. The
            silk book listed 29 comets (1 worn out already) that appeared over
            300 years, and each comet is associated with a historical event,
            ranging from the empowerment of emperors to plagues and wars.
          </p>
          <ExpandableImage
            src="/imgs/cometale/book-of-silk-comet.png"
            alt="Comet section of the Book of Silk."
            description="Comet series in Divination by Astrological and Meteorological Phenomena. Under each comet, the event that linked to its appearance and the name of the scribe were recorded correspondingly. Photo credit: Hunan Museum in Changsha, China."
          />
          <h4>Comets and Nature</h4>
          <p>
            Recent astronomical research suggests that comets may have brought
            water to Earth. This hypothesis sparked my interest in the
            connection between comets and Nature, as well as the connection
            between the microscopic and macroscopic views of our universe.
          </p>
        </section>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {natureImgs.map((img, index) => (
              <div key={index} className="w-full h-auto">
                <ImageWithCaption
                  src={img.src}
                  alt={img.description}
                  caption={img.description}
                />
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3>Production</h3>
          <h4>AI Images and Animations</h4>
          <p>
            To create the visuals in the installation, I used Midjourney to
            remix the design of each comet diagram with images of life or
            natural phenomena on Earth that share similar visual
            characteristics. For example, the comet diagram may be remixed with
            a picture of brain neurons or invisible bacteria. The resulting
            images are projected to create an immersive experience as a series
            of composite comet images. These images blur the lines between macro
            and micro, ancient and modern, and cosmic and terrestrial.
          </p>
          <Slideshow slides={AIImgs} />
          <p>
            To arrange the animation clips, I decided to put them in a line, so
            that the projection mimics the shape of an ancient Chinese scroll.
            Standing in front of the projection is like reading about comets
            from the Book of Silk.{" "}
          </p>
          <div className="relative w-full pb-[56.25%] my-8">
            <iframe
              width="full"
              height="auto"
              src="https://player.vimeo.com/video/803802379?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              title="Cometale visual effect."
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <h4>Interaction</h4>
          <p>
            Cometale is a single-player experience because the relatively
            private environment allows viewers to comfortably interact with the
            projections and further explore and contemplate. When the viewer
            stands in front of a projected block, the corresponding animation
            begins to play. AI-generated background soundtrack enhances the
            immersive experience.
          </p>
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
