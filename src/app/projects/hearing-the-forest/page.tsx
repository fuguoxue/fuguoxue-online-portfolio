'use client'; 
import { useEffect, useState } from "react";
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
// Array of image paths
const playtestingPhotos = [
  "/imgs/hearing-the-forest/Weixin Image_20241215143419.jpg",
  "/imgs/hearing-the-forest/Weixin Image_20241215143428.jpg",
  "/imgs/hearing-the-forest/Weixin Image_20241215143446.jpg",
];
const projectName = "Hearing the Forest";

export default function Main() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures iframe is rendered only on the client
  }, []);
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
        <h3>Project Showcase</h3>
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
          {/* Conditionally render the iframe on the client */}
          {isClient && (
            <iframe src="https://itch.io/embed-upload/12446200?color=333333" allowFullScreen
            className="w-full h-full border-none"><a href="https://oursblancitalien.itch.io/hearing-the-forest">Play Hearing the Forest on itch.io</a></iframe>
          )}
        </div>
        <b>How to play:</b>
        <ol className="list-decimal ml-4">
          <li>Find an NPC in game.</li>
          <li>Press &quot;E&quot; to interact with the NPC.</li>
          <li>Left-click on a seed in seed repository obtained from the NPC.</li>
          <li>Face any direction and press &quot;T&quot; to plant a tree.</li>
        </ol>
        <section>
          <h3>Inspiration & Ideation</h3>
          <p>
            The inspiration comes from the Lantern Festival in China. Marking
            the end of the Spring Festival, the Lantern Festival is just as
            bustling as the Spring Festival. If visit a temple fair on that day,
            one can find many interesting events including games and
            performances. Among them, I love lantern riddles the most because
            they always have unexpected ingenious answers. Another of my
            impressions of the festival is the round and bright Moon that night.
            Different from the bustling crowds, the Moon is always peacefully up
            in the sky and gently spreads its light across everything on the
            ground. What would the Lantern Festival look like without the
            crowds? By developing this digital experience, I want to design a
            different, tranquil Lantern Festival vibe by keeping two of its most
            iconic elements: the Moon and lanterns. With this idea of
            redesigning the Lantern Festival vibe, I started my scene design. I
            was inspired by a Chinese myth about the Moon, which mentioned the
            existence of the Moon Palace, the Jade Rabbit, and a giant Katsura
            tree on the Moon. By synthesizing these mythical elements, I
            designed a natural, peaceful scene with an eternal and dreaming
            feeling. To immerse players into the scene, I designed the
            experience to be a first-person one. Some 3D audio fields are also
            added to the scene to enhance the interactivity and immersive
            feeling.
          </p>
        </section>
        <h3>Production</h3>
        <h4>Build the Scene</h4>
        <p>
          I used Unity 3D to build the scene. The terrain mesh is generated with
          a noise function from a predefined seed, so that the peaks and valleys
          look natural. The same function can also be applied for generating the
          terrain material, whose color changes with altitude. The night scene
          is lit up by the emissive materials of the stairs, lanterns, and the
          Moon. To make the scene look more natural, I added fog to the scene
          and post-processing modules for the camera component. Another
          post-processing was added to the water area to give a blue tint when
          the first person player is in the water.
        </p>
        <h4>Tree Generation: Connection to Assistants API</h4>
        <p>
          I used L-systems to generate the trees. Since I want every tree to be
          unique, I thought of customizing an AI application to generate
          different L-system rules upon requests.
        </p>
        <ImageWithCaption
          src="/imgs/hearing-the-forest/Flowchart - Assistant AI Flowchart.jpg"
          alt="Seed generation flow powered by Assistant API."
          caption="Seed generation flow powered by Assistant API."
          widthPercentage={80}
        />
        <h4>Real-time Tree Audio: Communication with Max MSP</h4>
        <p>
          In local mode, each tree planting experience comes with a unique chime
          audio. This is realized by a Max patch (locally available together
          with the Unity game file) and OSC communication between Unity and Max
          MSP. The L-system rule is sent to the Max patch, and each character in
          the rule string is mapped to a musical rules like ascending a key,
          adding a new channel, etc. This way, the audio is generated real-time
          together with the tree growth.
        </p>
        <h4>Playtesting Documnetation</h4>
        <ImageWithCaption
          src="/imgs/hearing-the-forest/Hearing the Forest Poster.png"
          alt="Playtesting session poster."
          caption="Poster for playtesting session."
        />
        <section>
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
