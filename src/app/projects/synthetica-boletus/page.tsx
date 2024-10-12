import ImageWithCaption from "@/components/ImageWithCaption";
import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
// import Image from "next/image";
import TitleLine from "../../../components/TitleLine";
import BackToTop from "@/components/BackToTop";

const projectName = "Synthetica Boletus";

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
        <div className="relative w-full pb-[56.25%] mb-4">
          <iframe
            width="full"
            height="auto"
            src="https://player.vimeo.com/video/719569618?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="Synthetica Boletus video on Vimeo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <section>
          <h3>Inspiration</h3>
          <p>
            COVID-19 has been going around worldwide since the beginning of the
            year 2020. Due to the implementation of COVID-19 epidemic prevention
            measures worldwide, human interaction and communication are shifting
            to virtual environments, and people are spending more time in front
            of screens than ever before.
          </p>
          <p>
            Inspired by this reality, we came up with the concept of a synthetic
            forest. Forest is a typical scenario of Nature, which is often
            regarded as the opposite of technology. A synthetic forest stands at
            the intersection of the two concepts, and prompts us to think:
            beyond this dualism, is there another possibility for a future in
            which humans coexist with nature and technology?
          </p>
          <p>
            By building this synthetic forest, we wanted to visualize our
            imagination of a future filled with creatures manipulated by
            technology. Without in-person contact in real life, creatures
            (including humans) affect each other via technology as media. Our
            traces are then digitized and used to power a virtual environment
            that attempts to simulate every detail of our surroundings.
          </p>
        </section>
        <section>
          <h3>Ideation & Production</h3>
          <p>
            The project consists of a digital screen, showcasing the virtual
            environment, and a physical setting in front of the screen for
            player interaction.
          </p>
          <ImageWithCaption
            src="/imgs/synthetica-boletus/ideation-sketch.jpg"
            alt=""
            caption=""
            widthPercentage={80}
          />
          <h4>Virtual Scene</h4>
          <p>
            I was in charge of the virtual scene design in Unity3D. To enhance
            the synthetic style, the scene would be a composition of synthetic
            elements including artificial grass and boletus with metallic
            texture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <ImageWithCaption
              src="/imgs/synthetica-boletus/grass.png"
              alt="I implemented the grass painting tool and 'brushed' a layer of grass on the terrain."
              caption="I implemented the grass painting tool and 'brushed' a layer of grass on the terrain."
            />
            <ImageWithCaption
              src="/imgs/synthetica-boletus/grass-with-light.png"
              alt="Then, I added lighting to the scene. The grass is pink after the lighting is applied, giving a dreamy and unreal vibe."
              caption="Then, I added lighting to the scene. The grass is pink after the lighting is applied, giving a dreamy and unreal vibe."
            />
            <ImageWithCaption
              src="/imgs/synthetica-boletus.gif"
              alt="Lastly, I added particle systems and Tyndall effect to make the scene more layered and dreamy."
              caption="Lastly, I added particle systems and Tyndall effect to make the scene more layered and dreamy."
            />
          </div>
          <p>The boletus were designed by my teammates.</p>
          <h4>Physical Scene</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <ImageWithCaption
              src="/imgs/synthetica-boletus/grass.jpg"
              alt="Green artificial grass carpet"
              caption="Green artificial grass carpet."
            />
            <ImageWithCaption
              src="/imgs/synthetica-boletus/pallets.jpg"
              alt="Used pallets in teal"
              caption="Used pallets in teal."
            />
            <ImageWithCaption
              src="/imgs/synthetica-boletus/grass-pallets-layout.jpg"
              alt="We laid out the pallets and grass in the lobby area in front of an LED screen"
              caption="We laid out the pallets and grass in the lobby area in front of an LED screen."
            />
          </div>
          <p>
            As cues of interaction, we made several cushions and placed them on
            the palettes. These cushions each contains a pressure sensor, which
            passes pressure signals via OSC to control the boletus in the
            virtual scene.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <ImageWithCaption
              src="/imgs/synthetica-boletus/cushion.jpg"
              alt="Cusion making"
              caption=""
            />
            <ImageWithCaption
              src="/imgs/synthetica-boletus/cushions.jpg"
              alt="Cushions in scene"
              caption=""
            />
          </div>
        </section>
        <section>
          <ImageWithCaption
            src="/imgs/synthetica-boletus/IMG_9266.jpg"
            alt="Documentation photo of an interactive scenario."
            caption=""
          />
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
