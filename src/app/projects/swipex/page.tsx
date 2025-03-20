// import ImageWithCaption from "@/components/ImageWithCaption";
import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
// import Image from "next/image";
import TitleLine from "../../../components/TitleLine";
import BackToTop from "@/components/BackToTop";
import { FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";
import ImageWithCaption from "@/components/ImageWithCaption";
import Image from "next/image";

const projectName = "SwipeX";

export default function Main() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 min-h-screen m-4">
      <div className="col-span-1 md:col-span-4 lg:col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1">
        <ProjectInfoSection projectName={projectName} />
        <Link
          href="https://www.newsmedialab.wkwsci.ntu.edu.sg/ProductPages/Swipex.html"
          className="external-link supplementary"
          target="_blank"
        >
          <FaLink className="external-link-icon" />
          Read more on SwipeX
        </Link>
        <Link
          href="https://github.com/ntu-news-media-lab/swipex"
          className="external-link supplementary"
          target="_blank"
        >
          <FaGithub className="external-link-icon" />
          SwipeX GitHub Page
        </Link>
      </aside>
      <main className="col-span-1 md:col-span-3 p-4 mb-8">
        <div className="relative w-full pb-[56.25%] mb-4">
          <iframe
            width="full"
            height="auto"
            src="https://www.youtube.com/embed/mlYvQh6tO0A?si=ZZ-UyhsrXqTKZVhd"
            title="SwipeX video on YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <section>
          <h3>Background</h3>
          <p>
            {" "}
            Nowadays, more and more people read news on social media using
            mobile phones. The trend has posed challenges to the traditional
            news industry. We researched and summarised the three challenges
            below:
          </p>
          <ul className="ml-4 list-disc">
            <li>
              How to transport content from printed newspapers to digital
              platforms?
            </li>
            <li>
              How to report the same news in different forms on different
              platforms?
            </li>
            <li>How to prevent fake news circulation?</li>
          </ul>
        </section>
        <section>
          <h3>News Partner</h3>
          <p>
            {" "}
            The news partner of our project is TODAYonline, a local Singapore
            news provider. Upon communicating with TODAYonline, we learned that
            TODAYonline wanted to have a tool to help expand its reach among
            young people in Singapore. We summarised our partner&apos;s
            requirements below.{" "}
          </p>
          <ul className="ml-4 list-disc">
            <li>
              <b>Target audience: </b>21-34 years old with a
              &quot;millennial&quot; mindset.
            </li>
            <li>
              <b>Goal: </b>Encourage positive and constructive engagement on
              social media.
            </li>
            <li>
              <b>Parameters: </b>
              <ul className="ml-4 list-circle">
                <li>
                  Not membership-based products, i.e., the product should not
                  require a subscription{" "}
                </li>
                <li>
                  The product is suitable for a small team to operate and
                  maintain.
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h3>User Insights</h3>
          <p>
            By conducting primary and secondary research (Google Forms survey
            and user interviews), we concluded three user personas of
            TODAYonline.
          </p>
          <b>User Persona 1: Marc, a busy young working adult</b>
          <ul className="ml-4 list-disc">
            <li>Values productivity and efficiency.</li>
            <li>Browses the news while having meals.</li>
            <li>Browses the news while having meals.</li>
          </ul>
          <b>User Persona 2: Ben, a freelancer</b>
          <ul className="ml-4 list-disc">
            <li>Passionate about social causes.</li>
            <li>Actively comments about current affairs on social media.</li>
            <li>Reads before bed.</li>
          </ul>
          <b>User Persona 3: Alice, a university student</b>
          <ul className="ml-4 list-disc">
            <li>Browses the news when traveling.</li>
            <li>Does not actively search for news.</li>
            <li>Reads whatever catches her attention on social media.</li>
          </ul>
          <p>
            Due to the time constraint (8 weeks), we decided to focus on Alice
            when developing our product. Same as Alice, we were university
            students ourselves. Therefore, focusing on Alice was more realistic
            for us, especially for later design processes like user testing.
          </p>
          <p>
            Based on Alice, the user persona of a university student, we formed
            our problem statement below:{" "}
          </p>
          <p className="quote">
            The overly stimulated millennial needs a way to consume news
            targeted to their needs because they do not dedicate time to reading
            the news.
          </p>
          <p>We then came up with several “How Might We…” questions below:</p>
          <div className="quote">
            <p className="mb-0">How Might We...</p>
            <ul className="list-disc ml-4">
              <li>make news more fun to get Alice to read more news?</li>
              <li>
                make news reading less time-consuming so Alice can consume more
                news?
              </li>
              <li>get Alice to actively search for news?</li>
            </ul>
          </div>
        </section>
        <section>
          <h3>Prototyping</h3>
          <p>
            Upon defining our problem statement and the “How Might We”
            questions, we brainstormed possible solutions for these questions
            and recorded them on stickers. Then, we selected from the stickers
            to form a user journey in the storyboard below.
          </p>
          <ImageWithCaption
            src="/imgs/swipex/storyboard.jpg"
            alt="Photo of user journey storyboard."
            caption="Photo of our user journey design."
          />
          <p>
            We were inspired by Instagram and Tinder, which used swiping
            interactions to deliver short messages, effectively grabbing
            users&apos; attention. This swiping interaction also fits well with
            our goal: to attract the attention of millennials who browse
            information on mobile devices in fragmented time. Therefore, in the
            storyboard ideas, we decided to prioritize the development of news
            summary cards and swiping functions.
          </p>
          <p>
            We named our product &quot;SwipeX&quot;, which is a web application
            easily integrated into the TODAY Online website. Its features
            include:
          </p>
          <ul className="ml-4 list-disc">
            <li>
              <b>Bite-size information: </b> news image, headline, and summary
              in one card; news cards of a day are randomly selected from the
              news database (will be customized if users spend sufficient time
              on the product).
            </li>
            <li>
              <b>Swipe left/right</b> to go to the next/previous card.
            </li>
            <li>
              <b>Swipe up</b> to read the whole news article.
            </li>
            <li>
              <b>&quot;Hide&quot; and &quot;Like&quot; buttons</b> for the user
              to express his/her news preference (can help achieve news
              customization).
            </li>
            <li>
              <b>Category tag</b> on the top left of the card to help the user
              identify whether the news is interesting for him/her.
            </li>
          </ul>
          <h4>Prototype</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <Image
                src="/imgs/swipex/prototype-1.jpg"
                alt="Screenshot of SwipeX web application entrance on TODAY Online website."
                width={500}
                height={500}
              />
            </div>
            <div className="col-span-1 flex items-center">
              <p>
                The &quot;Explore&quot; red button on the top right of TODAY
                Online website is the entrance to SwipeX. It features the same
                red color as TODAY Online logo and the same typeface of the
                website content, which allow it to seamlessly integrate into the
                existing web interface.
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <div className="flex flex-col">
                <p className="col-span-1">
                  Upon tapping on the &quot;Explore&quot; button, user sees the
                  news summary card. It features:
                </p>
                <ul className="ml-4 list-decimal col-span-1">
                  <li>
                    <b>Category tab: </b>a category tab on the top left of the
                    interface, showing the current news category.
                  </li>
                  <li>
                    <b>News summary card: </b>a news summary card centered in
                    the interface, which consists of a header image, a news
                    headline, and one to two paragraphs as news deck.
                  </li>
                  <li>
                    <b>&quot;Hide&quot; and &quot;Like&quot; buttons: </b>the
                    &quot;Hide&quot; and &quot;Like&quot; buttons below the news
                    card enable feedback from user. By tapping on the two
                    buttons, user expresses their news preferences, which will
                    be recorded in website Cookie. The preference information is
                    received by the algorithm in the back-end, so that the news
                    cards in the future will cater to user preferences.
                  </li>
                  <li>
                    <b>Swipe up to read more: </b>if user is interested in the
                    news upon browsing the news summary card, they can swipe up
                    to read the full news article.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <Image
                src="/imgs/swipex/prototype-2.jpg"
                alt="Screenshot of SwipeX web application entrance on TODAY Online website."
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
        <section>
          <h3>Iterations</h3>
          <p>
            Upon finishing the first prototype, we conducted rounds of user
            testing, recording and observing user interactions with out
            prototype.
          </p>
          <h4>User Testing</h4>
          <ul className="ml-4 list-disc">
            <li>
              Users didn&apos;t understand the functions of the &quot;Hide&quot;
              and &quot;Like&quot; buttons. Some users also pointed out that the
              &quot;Like&quot; button sometimes can have inappropriate meaning
              (e.g., a &quot;Like&quot; button under news about wars).
            </li>
            <li>
              Users could not tell how many cards there were, worrying about
              having an infinite number of them.
            </li>
            <li>
              The &quot;Explore&quot; button on the main page to open our swipe
              cards is hard to notice.
            </li>
          </ul>
          <p>
            With these user insights in mind, we iterated over our prototype to
            level up the affordance of our product.
          </p>
          <h4>Iteration</h4>
          <div className="grid grid-cols-2 gap-4">
            {/* Iteration Image 1 */}
            <div className="col-span-1">
              <Image
                src="/imgs/swipex/iteration-1.jpg"
                alt="Screenshot of SwipeX web application entrance on TODAY Online website."
                width={500}
                height={500}
                className="w-1/2 m-auto"
              />
            </div>
            <div className="col-span-1 flex items-center">
              <p>
                We removed &quot;Hide&quot; and &quot;Like&quot; buttons due to
                their unclear and sometimes inappropriate meanings to users.
              </p>
            </div>
            {/* Iteration Image 2 */}
            <div className="col-span-1 flex items-center">
              <div className="flex flex-col">
                <p className="col-span-1">
                  In addition to the category labels, we also marked the current
                  card number and the total number of cards in the upper right
                  corner of each news card. This way, users know how many cards
                  are available to read.
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <Image
                src="/imgs/swipex/iteration-2.jpg"
                alt="Screenshot of SwipeX web application entrance on TODAY Online website."
                width={500}
                height={500}
              />
            </div>
            {/* Iteration Image 3 */}
            <div className="col-span-1">
              <Image
                src="/imgs/swipex/iteration-3.jpg"
                alt="Screenshot of SwipeX web application entrance on TODAY Online website."
                width={500}
                height={500}
                className="w-1/2 m-auto"
              />
            </div>
            <div className="col-span-1 flex items-center">
              <p>
                We also changed the entrance to SwipeX to a red floating bubble,
                making it stand out on the screen and inviting users to interact
                with it.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3>Outcome</h3>
          <div className="relative w-full pb-[56.25%] mb-4">
            <iframe
              width="full"
              height="auto"
              src="https://www.youtube.com/embed/mlYvQh6tO0A?si=ZZ-UyhsrXqTKZVhd"
              title="SwipeX video on YouTube"
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
