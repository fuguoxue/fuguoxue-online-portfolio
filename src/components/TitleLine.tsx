import P5ShadowController from "./P5TitleShadow";
import Footer from "./Footer";

export default function TitleLine() {
  return (
    <div className="grid grid-cols-5">
      <aside className="col-span-1 p-4">
        <P5ShadowController />
      </aside>
      <div className="col-span-3 p-4"></div>
      <div className="col-span-1 p-4 flex items-center justify-end">
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
