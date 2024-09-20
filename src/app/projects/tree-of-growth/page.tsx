import {
  ProjectInfoSection,
  ProjectSwitch,
} from "@/components/projectInfoSection";
import Image from "next/image";
import TitleLine from "@/components/TitleLine";

// Array of image paths
const images = [
  "/imgs/tree-of-growth/Weixin Image_20240728103144.jpg",
  "/imgs/tree-of-growth/Weixin Image_20240728103216.jpg",
  "/imgs/tree-of-growth/Weixin Image_20240728103227.jpg",
];

const projectName = "Tree of Growth";

export default function Main() {
  return (
    <div className="grid grid-cols-5 min-h-screen m-4">
      <div className="col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1 p-4 sticky top-4">
        <ProjectInfoSection projectName={projectName} />
        <ProjectSwitch projectName={projectName} />
      </aside>
      <main className="col-span-3 p-4">
        {/* Embedded video */}
        <div className="relative w-full pb-[56.25%] mb-8">
          <iframe
            width="full"
            height="auto"
            src="https://www.youtube.com/embed/nKgBetR-J_k?si=Qa2zERKLLu6fo-Hh"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>

        {/* Map over images to display them */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((imgSrc, index) => (
            <div key={index} className="w-full h-auto">
              <Image
                src={imgSrc}
                alt={`Tree of Growth image ${index + 1}`}
                width={400}
                height={400}
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </main>
      <div className="col-span-1 p-4"></div>
    </div>
  );
}
