import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
import Image from "next/image";
import TitleLine from "../../../components/TitleLine";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import ImageWithCaption from "@/components/ImageWithCaption";

const projectName = "WildWeb";

const productionImgs = [
  {src:"/imgs/wildweb/IMG_9145.jpg", caption:"Welded frames of the mechanical flower."},
  {src:"/imgs/wildweb/IMG_9198.jpg", caption:"Optic fibres in bunches were carefully polised by sand paper and connected to LEDs."},
  {src:"/imgs/wildweb/IMG_9197.jpg", caption:"Organza cut into petal shapes."},
  {src:"/imgs/wildweb/20231217_154031.jpg", caption:"Assembled mechanical flowers powered by Arduino."},
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
          href="https://wp.nyu.edu/tandonschoolofengineering-fuguoxue_interactive_installation/category/final/"
          className="external-link supplementary"
          target="_blank"
        >
          <FaBook className="external-link-icon" />
          Project Blog
        </Link>
      </aside>
      <main className="col-span-1 md:col-span-3 p-4 mb-8">
        <Image
          src={`/imgs/wildweb-cover.jpg`}
          alt={`WildWeb`}
          width={400}
          height={400}
          className="w-full object-cover mb-8"
        />
        <div className="relative w-full pb-[56.25%] mb-8">
          <iframe
            width="full"
            height="auto"
            src="https://player.vimeo.com/video/913085766?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="WildWeb showcase video on Vimeo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>

        {/* Inspiration */}
        <section>
          <h3>Inspiration</h3>
          <ul className="list-disc ml-4">
            <li>Neural networks, a kind of machine learning model inspired by biological neural networks of animal brains.</li>
            <li>Social media posts, and their utilization and monetization of user input and feedback.</li>
          </ul>
        </section>
        {/* Ideation */}
        <section>
          <h3>Ideation</h3>
          <p>Inspired by the prevailing application of machine learning in social media, we wanted to build a physical installation to visualize the connection between user input (posts, reactions, user habits, ...) and social media output (personalized feeds and news, notifications, ...). By learning from players&apos; reactions and appearance, the installation generates customized live visuals. </p>
          <ImageWithCaption src="/imgs/wildweb/wildweb-sketch.jpg" alt="Wildweb installation sketch." caption="Wildweb installation sketch. We designed the installation to be attached to a surface, such as a wall or a table." widthPercentage={70}/>
          <p>We designed the physical computing element to resemble a flower powered by electricity and programming, symbolizing the technological manipulation of the surrounding environment and nature.</p>
        </section>

        {/* Design and Implementation */}
        <section>
          <h3 className="mb-4">Design and Implementation</h3>
          <h4>Mechainal Flowers</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-4">
            {productionImgs.map((imgSrc, index) => (
              <div key={index} className="w-full h-auto">
                <ImageWithCaption
                  src={imgSrc.src}
                  alt={`Tree of Growth image ${index + 1}`}
                  caption={imgSrc.caption}
                  widthPercentage={100}
                />
              </div>
            ))}
          </div>
          <h4>Live Visuals</h4>
          <p>I designed and programmed the live visuals in Max MSP, hydra, and RiTa.js (a p5.js library for natural language generation).</p>
          <p>The installation&apos;s digital projection consists of live visuals filtered by a Hydra program and a text paragraph generated with RiTa.js functions, just like a social media post. Each time the player presses a button on the installation, a new post is generated with new visuals and a new paragraph. By consuming user input, the installation generates a potentially endless amount of content.</p>
          <div className="relative w-full pb-[56.25%] mb-8">
            <iframe
              width="full"
              height="auto"
              src="https://www.youtube.com/embed/l-PoSrtKr6g"
              title="Live Visuals"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <h4>Installation</h4>
          <div className="relative w-full pb-[56.25%] mb-8">
            <iframe
              width="full"
              height="auto"
              src="https://www.youtube.com/embed/G_18DvXixXk?si=krVgDgOw4JGdW9Lr"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
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
