// import ImageWithCaption from "@/components/ImageWithCaption";
import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
// import Image from "next/image";
import TitleLine from "../../../components/TitleLine";
import BackToTop from "@/components/BackToTop";
import { FaBook } from "react-icons/fa";
import Link from "next/link";
import ImageWithCaption from "@/components/ImageWithCaption";
import ExpandableImage from "@/components/ExpandableImage";
import Slideshow from "@/components/Slideshow";

const projectName = "NYC Subway Navigation";

const ideationImgs = [
  {
    image: "/imgs/nyc-subway-navigation/user-journey-map.PNG",
    description:
      "User journey map. We observed that pain points lie in in-station navigation before and after getting on a subway train.",
  },
  {
    image: "/imgs/nyc-subway-navigation/user-persona.PNG",
    description: "User persona as an anchor for our upcoming design.",
  },
  {
    image: "/imgs/nyc-subway-navigation/goal-1.PNG",
    description:
      "Our design goal. We aimed at creating clear, accurate, intuitive, and accessible in-station navigation for NYC subway users, especially for people unfamiliar with the system.",
  },
  {
    image: "/imgs/nyc-subway-navigation/goal-2.PNG",
    description:
      "We decided to redesign in-station signage for 34 St - Herald Square station because it is a typically complex station at an intersection of many subway lines,where people tend to get lost.",
  },
];

export default function Main() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 min-h-screen m-4">
      {/* Title line */}
      <div className="col-span-1 md:col-span-4 lg:col-span-5">
        <TitleLine />
      </div>
      {/* Left column - project info */}
      <aside className="col-span-1">
        <ProjectInfoSection projectName={projectName} />
        <Link
          href="https://wp.nyu.edu/tandonschoolofengineering-fuguoxue6053/category/ux-design-research/"
          className="external-link supplementary"
          target="_blank"
        >
          <FaBook className="external-link-icon" />
          Project Blog
        </Link>
      </aside>
      {/* Main - project content */}
      <main className="col-span-1 md:col-span-3 p-4 mb-8">
        {/* Inspiration */}
        <section>
          <h3>Inspiration</h3>
          <p>
            International students studying in New York City take subways in
            their everyday lives, from commuting between classrooms and
            residences to hanging out on weekends. While NYC subway navigation
            system is mature with a long history, it can be difficult to
            understand and navigate for newly arrived New Yorkers like NYC
            international students.
          </p>
          <p>
            As international students, we care about this issue and want to help
            people with similar concerns. We decided to start from learning
            about the existing NYC subway navigation system and international
            students&apos; opinions on the system.
          </p>
        </section>
        <section>
          <h3>Secondary Research: Mess Map & Literature Review</h3>
          <h4>Initial Mess Map</h4>
          <p>
            First, we formed a mess map of what we already know about subway
            navigation.
          </p>
          <p>
            The left half of the mess map focuses on the functions that we think
            should be included in a subway navigation system. The right half
            focuses on the user interface in a subway navigation system, which
            includes a mobile APP, signs at the stations, and a subway map.
          </p>
          <ExpandableImage
            src="/imgs/nyc-subway-navigation/mess-map-initial.png"
            alt="Screenshot of first version of mess map about subway navigation."
            description="Screenshot of first version of mess map about subway navigation."
          />
          <p>
            From this mess map, we brought up 5 guiding questions for our
            literature review:
          </p>
          <ul className="list-disc ml-4">
            <li>
              What are some assistive technologies used in subway navigation
              systems?
            </li>
            <li>
              What are the biggest challenges/problems in subway navigation
              design in New York?
            </li>
            <li>
              Subway navigation systems in other countries/cities that New York
              can learn from.
            </li>
            <li>
              What is the most critical element in navigation of NYC Subway?
            </li>
            <li>
              What are our unique value propositions (UVPs)? How can we
              differentiate from existing subway navigation apps? Ex. Google
              Maps.
            </li>
          </ul>
          <p>
            With these 5 questions in mind, we searched for literatures covering
            borad topics around subway navigation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <ExpandableImage
                src="/imgs/nyc-subway-navigation/literature-review-1.png"
                alt="Screenshot of literature review."
                description="Literature review screenshot 1."
              />
            </div>
            <div className="col-span-1">
              <ExpandableImage
                src="/imgs/nyc-subway-navigation/literature-review-2.png"
                alt="Screenshot of literature review."
                description="Literature review screenshot 2."
              />
            </div>
          </div>

          <p>
            The topics I found interesting are Subway Navigation
            Technology/Techniques, Massimo Vignelli’s Map for NYC, and the
            comparison between NYC Subway Singapore Subway. The latter two are
            more relevant to our later progress, so I listed my findings below.
          </p>
          <h4>Massimo Vignelli’s Map for NYC</h4>
          <p>
            This is another topic I encountered when searching for NYC subway
            information. Massimo Vignelli was an Italian designer who worked in
            a number of areas including packaging, houseware, furniture, public
            signage, and showroom design. He is also the designer of the 1972
            New York City Subway map, which was widely rejected by the public
            once but gradually gained acknowledgment again recently.
          </p>
          <p>
            Another interesting book is Helvetica and the New York City Subway
            System by Paul Shaw, which talks about the evolution of subway
            signage’s visual effects in NYC. I only read the description of the
            book for now but would like to read more. I think it will help guide
            our design later if we are designing any form of user interface or
            graphics for subway navigation.
          </p>
          <ImageWithCaption
            src="/imgs/nyc-subway-navigation/vignelli-subway-map.jpg"
            alt="Massimo Vignelli’s Map for NYC"
            caption="Massimo Vignelli’s Map for NYC"
            widthPercentage={50}
          />
          <h4>NYC Subway vs Singapore Subway</h4>
          <p>
            I lived in Singapore for years and found its subway system very
            convenient and efficient for traveling around the city. On the other
            hand, I’ve only been on the NYC subway three times but found it
            quite different from Singapore’s subway in many ways. Therefore, I
            am interested in the comparison between the NYC subway and the
            Singapore subway due to their various similarities (e.g., the two
            cities both have a dense population) and the drastic differences
            between their subway systems.
          </p>
          <p>
            To learn more about this topic, I found the book named “Subway
            Productivity, Profitability, and Performance: A Tale of Five
            Cities”. The book compares NYC with other four Asian cities
            including Hong Kong, Singapore, and Taipei. I learned from the book
            that different design choices and governance structures in Asia
            contribute to higher productivity and reliability compared to New
            York’s socially conscious and inclusive approach. Moreover, careful
            analysis is required for fair performance comparisons, but
            benchmarking offers insights for operational improvement under local
            constraints.
          </p>
          <h4>Revised Mess Map</h4>
          <p>
            Based on our secondary research findings, we revised our mess map to
            include our findings from literature review.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <ExpandableImage
                src="/imgs/nyc-subway-navigation/mess-map-initial.png"
                alt="Screenshot of first version of mess map about subway navigation."
                description="Initial mess map."
              />
            </div>
            <div className="col-span-1">
              <ExpandableImage
                src="/imgs/nyc-subway-navigation/mess-map-final.png"
                alt="Screenshot of final version of mess map about subway navigation."
                description="Final mess map with more knowledge, including functions and accessibility of subway navigation system and applications."
              />
            </div>
          </div>
        </section>
        <section>
          <h3>Stakeholder Map</h3>
          <p>
            Before, we thought that an app can solve the subway navigation
            problem. However, based on our secondary research, most people use
            powerful Google Maps for subway navigation while still facing
            difficulties. Therefore, we took a step back to observe the real
            gaps in user experience.
          </p>
          <p>We started with drawing a stakeholder map.</p>
          <ExpandableImage
            src="/imgs/nyc-subway-navigation/stakeholder-map.png"
            alt="Screenshot of stakeholder map."
            description="Stakeholder map. We narrowed down our key stakeholders to NYC subway users."
          />
          <p>
            Based on our stakeholder map, we narrowed down our key stakeholders
            to NYC subway users.
          </p>
        </section>
        <section>
          <h3>Primary Research</h3>
          <p>
            To learn about our target users, we conducted transect tours and
            interviews. Below are key user insights:
          </p>
          <ul className="list-disc ml-4">
            <li>
              <b>People would rather rely on Google Maps</b> than look at the
              signs at the subway stations.
              <b>
                However, there is no signal inside most MYC subway stations and
                navigation software cannot be used.
              </b>
            </li>
            <li>
              <b>The current in-station signage can confuse navigation.</b>{" "}
              Especially for foreigners, the NYC subway navigation system is
              less intuitive compared with the newer systems of other cities or
              countries.
            </li>
          </ul>
          <p>
            The NYC subway system is old, complex, and huge with 36 lines and 28
            services. Therefore, we think redesigning the NYC subway signage is
            the most efficient way to improve the system in a short time.
          </p>
        </section>
        <section>
          <h2>Ideation</h2>
          <h3>User Analysis & Goal Setting</h3>
          <Slideshow slides={ideationImgs} autoplay={false} />
        </section>
        <section>
          <h2>Production</h2>
          <h3>Prototyping & A/B Tests</h3>
          <p>
            Based on our user interviews, we break down a subway navigation
            journey into 3 key steps:
          </p>
          <ol className="list-decimal ml-4">
            <li>Get into the correct subway station.</li>
            <li>Find the correct line and direction to take.</li>
            <li>Get out from the correct exit.</li>
          </ol>
          <p>
            The 2nd and 3rd steps are within our design scope because they are
            about in-station navigation. To improve the experience in these two
            steps,
            <b>
              we redesigned overhead signs in hallways, LED screens on the
              trains, and exit signs.
            </b>
          </p>
          <p>
            Then, we conducted A/B tests by showing all our designs to NYC
            subway users. Below are our designs and user feedback.
          </p>
        </section>
        <section>
          <h4>Overhead signs</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2">
              <ImageWithCaption
                src="/imgs/nyc-subway-navigation/overhead-original.png"
                alt="Collage of current overhead signs."
                caption="Current overhead signs."
                widthPercentage={40}
              />
            </div>
            <div className="col-span-1">
              <ExpandableImage
                src="/imgs/nyc-subway-navigation/overhead-version-1.png"
                alt="Screenshot overhead signs redesign 1st version."
                description="Overhead signs redesign, 1st version. Improvements to overhead signs address two issues: information hierarchy and clarity of directional instructions in complex structures."
              />
            </div>
            <div className="col-span-1">
              <ExpandableImage
                src="/imgs/nyc-subway-navigation/overhead-version-2.png"
                alt="Screenshot overhead signs redesign 2nd version."
                description="Overhead signs redesign, 2nd version. Another way to mark the exits. The signs have a consistent look because we used our redesigned signage index."
              />
            </div>
          </div>
          <b>A/B test feedback:</b>
          <ul className="list-disc ml-4">
            <li>
              Version 1 is clearer, version 2 information is a bit overwhelming.
            </li>
            <li>
              Preferred information priority: subway lines &gt; directions.
            </li>
            <li>Exit might be better on an all-red background.</li>
            <li>
              Users only care about the general direction and don’t expect
              arrows to give specific directions.
            </li>
            <li>
              Users prefer thinner arrows because they make other main
              information stand out more.
            </li>
            <li>
              Users also expressed expectations for a redesign of the overhead
              signs at the subway platforms.
            </li>
          </ul>
        </section>
        <section>
          <h4>LED screens on the trains</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <ImageWithCaption
                src="/imgs/nyc-subway-navigation/LED-original.png"
                alt="Photo of current LED sign on an NYC subway train."
                caption="Current LED sign on an NYC subway train."
              />
            </div>
            <div className="col-span-1">
              <ExpandableImage
                src="/imgs/nyc-subway-navigation/LED-version-2.png"
                alt="Image of our redesigned LED signs."
                description="LED signs redesign. We put more information on the origin and destination so that commuters don't need to read the overhead signs when a train has arrived."
              />
            </div>
          </div>
          <b>User test feedback:</b>
          <p>
            Users all preferred our new design over the existing ones. However,
            some raised questions about the cost of such an update. Therefore,
            we made an animation of the LED screen to make it look practical and
            worth the investment.
          </p>
          <div className="relative w-full pb-[56.25%] mb-8">
            <iframe
              width="full"
              height="auto"
              src="https://www.youtube.com/embed/yRKpnH73j4E"
              title="Live Visuals"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </section>
        <section>
          <h4>Exit signs</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2">
              <ImageWithCaption
                src="/imgs/nyc-subway-navigation/exit-original.jpg"
                alt="Photo of a current exit sign."
                caption="A current exit sign."
                widthPercentage={40}
              />
            </div>
            <div className="col-span-1">
              <ExpandableImage
                src="/imgs/nyc-subway-navigation/exit-version-1.png"
                alt="Screenshot of exit sign redesign, 1st version"
                description="Exit signs redesign, 1st version. Referring to the signage in Chongqing, China, we gave each exit a number (1-14) and labeled it with the current exit name. We also added landmarks and stores near the exit."
              />
            </div>
            <div className="col-span-1">
              <ExpandableImage
                src="/imgs/nyc-subway-navigation/overhead-version-2.png"
                alt="Screenshot of exit sign redesign, 2nd version"
                description="Exit signs redesign, 2nd version. We matched the exit sign to the current NYC subway style. We also added icons for nearby parking lots and train stations for more efficient navigation."
              />
            </div>
          </div>
          <b>A/B test feedback:</b>
          <ul className="list-disc ml-4">
            <li>
              Users like the eye-catching yellow road names in version 1, as
              well as the numbers and exit written separately.
            </li>
            <li>
              Users like the font size in version 2, where the Exit and its
              number have a much bigger font size than its nearby landmarks.
              Users also like the icons for train stations and parking lots.
            </li>
          </ul>
        </section>
        <section>
          <p>
            Based on the A/B testing results, we iterated our design to better
            suits our stakeholders&apos; needs.
          </p>
        </section>
        <section>
          <h2>Final Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2">
              <ImageWithCaption
                src="/imgs/nyc-subway-navigation/signage-index.png"
                alt="Image of signage index."
                caption="Redesigned signage index."
                widthPercentage={70}
              />
            </div>
            <div className="col-span-1">
              <ExpandableImage
                src="/imgs/nyc-subway-navigation/iteration-overhead-1.png"
                alt="Screenshot of redesigned overhead signs part 1."
                description="Redesigned overhead signs part 1."
              />
            </div>
            <div className="col-span-1">
              <ExpandableImage
                src="/imgs/nyc-subway-navigation/iteration-overhead-2.png"
                alt="Screenshot of redesigned overhead signs part 2."
                description="Redesigned overhead signs part 2."
              />
            </div>
            <div className="col-span-1">
              <ExpandableImage
                src="/imgs/nyc-subway-navigation/iteration-overhead-3.png"
                alt="Screenshot of redesigned overhead signs part 3."
                description="Redesigned overhead signs part 3."
              />
            </div>
            <div className="col-span-1">
              <ExpandableImage
                src="/imgs/nyc-subway-navigation/iteration-exit.png"
                alt="Screenshot of redesigned signs at exits."
                description="Redesigned signs at exits."
              />
            </div>
            <div className="col-span-1 relative w-full pb-[56.25%] mb-8">
              <iframe
                width="full"
                height="auto"
                src="https://www.youtube.com/embed/yRKpnH73j4E"
                title="Live Visuals"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      {/* Right column - prev and next buttons, and back to top button */}
      <div className="col-span-1 sm:hidden md:block lg:hidden"></div>
      <aside className="col-span-1 md:col-span-3 lg:col-span-1">
        <ProjectSwitch projectName={projectName} />
        <BackToTop />
      </aside>
    </div>
  );
}
