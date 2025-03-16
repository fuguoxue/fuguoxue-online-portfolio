// import Image from "next/image";
import TitleLine from "@/components/TitleLine";
import BackToTop from "@/components/BackToTop";
// import ImageWithCaption from "@/components/ImageWithCaption";
import Link from "next/link";
import blogSeries from "@/data/blog-series.json";

// const blogTag = "idm-thesis";
// const blogSeriesName = blogIDName[0][blogTag];

export default function Main() {
  const filteredBlogSeries = blogSeries.filter(
    (blogSeries) => blogSeries.posted
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 min-h-screen m-4">
      <div className="col-span-1 lg:col-span-5">
        <TitleLine />
      </div>
      <div className="col-span-1 sm:hidden md:hidden lg:block"></div>
      <main className="col-span-1 lg:col-span-3 p-4 mb-8">
        {/* blog list */}
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

        <div className="col-span-1 sm:hidden md:block lg:hidden"></div>
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <BackToTop />
        </div>
      </main>
    </div>
  );
}
