import P5ShadowController from "./P5TitleShadow";
import Footer from "./Footer";

export default function TitleLine() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
      {/* Title/Shadow Component */}
      <div className="col-span-1 md:col-span-4 p-4">
        <P5ShadowController />
      </div>

      {/* Footer Section */}
      <div className="col-span-1 p-4 flex items-center justify-center lg:justify-end">
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
