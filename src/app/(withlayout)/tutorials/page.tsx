import Link from "next/link";
import tutorialSeries from "@/data/tutorial-series.json";

export default function Main() {
  const filteredtutorialSeries = tutorialSeries.filter(
    (tutorialSeries) => tutorialSeries.posted
  );

  return (
    <div>
      <section>
        <h2>Tutorials</h2>
        <div>
          {filteredtutorialSeries.map((item) => {
            return (
              <div key={item.tutorialTag}>
                <Link
                  href={`/tutorials/${item.tutorialTag}`}
                  className="group inline-flex items-center text-tag transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  <span className="transition-all group-hover:underline">
                    {item.tutorialName}
                  </span>
                  <span className="transition-all transform group-hover:scale-105">
                    &nbsp;&#8594;
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
