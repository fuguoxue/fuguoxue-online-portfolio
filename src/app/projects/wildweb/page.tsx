import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
import Image from "next/image";
import TitleLine from "../../../components/TitleLine";

const projectName = "WildWeb";

const images = [
  "/imgs/wildweb/IMG_9145.jpg",
  "/imgs/wildweb/IMG_9198.jpg",
  "/imgs/wildweb/IMG_9197.jpg",
  "/imgs/wildweb/20231217_154031.jpg",
];

export default function Main() {
  return (
    <div className="grid grid-cols-5 m-4">
      <div className="col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1 p-4 sticky top-4">
        <ProjectInfoSection projectName={projectName} />
      </aside>
      <main className="col-span-3 p-4 mb-8">
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

        {/* Design and Implementation */}
        <h2 className="mb-4">Design and Implementation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-4">
          {images.map((imgSrc, index) => (
            <div key={index} className="w-full h-auto">
              <Image
                src={imgSrc}
                alt={`Tree of Growth image ${index + 1}`}
                width={400}
                height={400}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>        
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
      </main>
      <div className="col-span-1 p-4">
        <ProjectSwitch projectName={projectName} />
      </div>
    </div>
  );
}
