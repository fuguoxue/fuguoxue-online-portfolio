import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
import Image from "next/image";
import TitleLine from "../../../components/TitleLine";
import Slideshow from "@/components/Slideshow";

const projectName = "The Surface City";

// const imageSources = [
//   "/imgs/the-surface-city/SC-0.png",
//   "/imgs/the-surface-city/SC-1.png",
//   "/imgs/the-surface-city/SC-2.png",
//   "/imgs/the-surface-city/SC-3.png",
//   "/imgs/the-surface-city/SC-4.png",
//   "/imgs/the-surface-city/SC-39.png",
//   "/imgs/the-surface-city/SC-41.png",
//   "/imgs/the-surface-city/SC-68.png",
//   "/imgs/the-surface-city/SC-71.png",
//   "/imgs/the-surface-city/SC-97.png"
// ];
const imageSources = [
  {
    image: "/imgs/the-surface-city/SC-0.png",
    thumbnail: "/imgs/the-surface-city/SC-0.png",
    description: "SC-0",
  },
  {
    image: "/imgs/the-surface-city/SC-1.png",
    thumbnail: "/imgs/the-surface-city/SC-1.png",
    description: "SC-1",
  },
  {
    image: "/imgs/the-surface-city/SC-2.png",
    thumbnail: "/imgs/the-surface-city/SC-2.png",
    description: "SC-2",
  },
  {
    image: "/imgs/the-surface-city/SC-4.png",
    thumbnail: "/imgs/the-surface-city/SC-4.png",
    description: "SC-4",
  },
  {
    image: "/imgs/the-surface-city/SC-39.png",
    thumbnail: "/imgs/the-surface-city/SC-39.png",
    description: "SC-39",
  },
  {
    image: "/imgs/the-surface-city/SC-41.png",
    thumbnail: "/imgs/the-surface-city/SC-41.png",
    description: "SC-41",
  },
  {
    image: "/imgs/the-surface-city/SC-68.png",
    thumbnail: "/imgs/the-surface-city/SC-68.png",
    description: "SC-68",
  },
  {
    image: "/imgs/the-surface-city/SC-71.png",
    thumbnail: "/imgs/the-surface-city/SC-71.png",
    description: "SC-71",
  },
  {
    image: "/imgs/the-surface-city/SC-97.png",
    thumbnail: "/imgs/the-surface-city/SC-97.png",
    description: "SC-97",
  }
];


export default function Main() {
  return (
    <div className="grid grid-cols-5 min-h-screen m-4">
      <div className="col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1 p-4 sticky top-4">
        <ProjectInfoSection projectName={projectName} />
      </aside>
      <main className="col-span-3 p-4 pb-[56.25%] mb-8">
        <div className="relative w-full mb-4">
          <Image
            src={`/imgs/The-Surface-City-cover.gif`}
            alt={`The Suface City cover image`}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <h3>Story of The Surface City</h3>
        <div className="my-2">
          <p>
            In SC, the Surface City, nothing is hidden from the city as all the
            activities happen on the surfaces of buildings. The city may seem
            gravity-free and floating in the air from a visitor&apos;s point of
            view. However, to the SC citizens, gravity does exist wherever the
            buildings are: they can stand on any surface of a building, vertical
            or horizontal, smooth or rough. They can also go anywhere from
            anywhere, as long as there is substance connecting the starting and
            the endpoint.
          </p>
          <p>
            It is said that SC has 98 districts, but no one has been to all of
            them. According to hearsay, SC-0 is a void district with no building
            at all; SC-1, SC-2, and SC-3 are districts with only one plane,
            where citizens living on its two sides never meet for their entire
            lives. There are many districts just a little less boring than these
            four, which are also one plane but with some peaks and valleys.
          </p>
          <p>
            However, there are some very attractive districts, like SC-39. While
            having a few buildings and residents, the district has a clean and
            minimalist style. Citizens in other districts love gazing at SC-39
            from far away, just to escape from the complexity/monotonicity of
            their districts.
          </p>
          <p>
            The most structured and convenient district is SC-68, with just the
            right amount of buildings and just the right ways of surface
            connections. Wherever a citizen wants to travel within the district,
            there is a way. The buildings are the perfect labyrinth for
            children&apos;s hide-and-seek, but not too confusing to allow them to
            find their way home.
          </p>
          <p>
            SC-97 is the most frightening district with many fading ends. Many
            things seem to be the same as SC-68: dense buildings, countless
            surface connections, etc. However, there is minimal breathing space;
            it is a labyrinth that no one can get out of. The best way to
            survive one has to be cautious enough to avoid those fading ends,
            which will swallow them into nothingness. Nothingness is different
            from death; one may be technically still alive in nothingness, but
            all proof of their existence is erased from the world — even more
            horrible than death. As the number of people vanishing drastically
            increases, the remaining residents begin to be aware of this fact
            and start to panic. A few people also become curious about where
            those people went, and bring up a hypothesis that the vanished
            people actually “entered” the buildings. But what does “enter” mean?
            Isn&apos;t everything just directly accessible, right on the surface?
          </p>
          
        </div>
        <Slideshow slides={imageSources} />
      </main>
      <div className="col-span-1 p-4">
        <ProjectSwitch projectName={projectName} />
      </div>
    </div>
  );
}
