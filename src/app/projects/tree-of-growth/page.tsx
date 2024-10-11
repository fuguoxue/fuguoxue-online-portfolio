import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
import Image from "next/image";
import TitleLine from "../../../components/TitleLine";
import ImageWithCaption from "@/components/ImageWithCaption";
import BackToTop from "@/components/BackToTop";

// Array of image paths
const images = [
  "/imgs/tree-of-growth/Weixin Image_20240728103144.jpg",
  "/imgs/tree-of-growth/Weixin Image_20240728103216.jpg",
  "/imgs/tree-of-growth/Weixin Image_20240728103227.jpg",
];
const gifs = [
  "/imgs/tree-of-growth/interaction1.gif",
  "/imgs/tree-of-growth/interaction2.gif",
];

const projectName = "Tree of Growth";

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
            src="https://www.youtube.com/embed/nKgBetR-J_k?si=Qa2zERKLLu6fo-Hh"
            title="Tree of Growth video on YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((imgSrc, index) => (
              <div key={index} className="w-full h-auto">
                <Image
                  src={imgSrc}
                  alt={`Tree of Growth image ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>From L-Systems to Tree Growing</h2>
          <p>
            An L-system (Lindenmayer system) is a parallel rewriting system and
            a type of formal grammar. The concept originated in biology by
            Lindenmayer to describe the growth patterns of yeast, fungi, and
            bacteria, which was later used to also describe complex branching
            structures in higher plants.
          </p>
          <p>
            Therefore, L-systems make it possible to simulate the natural
            patterns of tree branches. We implemented the grammar in Max to
            generate patterns of trees with randomness in the angles between
            branches. This way, each tree generated is unique.
          </p>
          <ImageWithCaption
            src="/imgs/tree-of-growth/Screenshot 2024-05-06 154747.png"
            alt={`Screenshot of a tree pattern. `}
            caption="Screenshot of a tree pattern generated with L-system programmed in Max MSP. "
            widthPercentage={50}
            minWidth={400}
          />
          <p>
            The dynamic and flexibility offered by L-systems made us interested
            in creating an interactive digital tree planting experience. To make
            it more physically engaging, we decided to place the interaction
            outside of a screen. To do that, we built a wooden box with textures
            covered in red paint. By placing this box within the activation
            area, a digital tree will grow out of the box position.{" "}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 my-4">
            {gifs.map((imgSrc, index) => (
              <div key={index} className="w-full h-auto">
                <Image
                  src={imgSrc}
                  alt={`Tree of Growth image ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
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
