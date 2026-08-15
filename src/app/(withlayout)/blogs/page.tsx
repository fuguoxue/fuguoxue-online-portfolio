import Link from "next/link";
import blogSeries from "@/data/blog-series.json";

export default function Main() {
  const filteredBlogSeries = blogSeries.filter(
    (blogSeries) => blogSeries.posted
  );

  return (
    <div>
      <section>
        <h2>Blogs</h2>
        <div>
          {filteredBlogSeries.map((item) => {
            return (
              <div key={item.blogTag}>
                <Link
                  href={`/blogs/${item.blogTag}`}
                  className="group inline-flex items-center text-tag transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  <span className="transition-all group-hover:underline">
                    {item.blogName}
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
