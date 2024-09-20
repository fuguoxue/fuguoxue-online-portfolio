import P5ShadowController from "./P5TitleShadow";

export default function TitleLine() {
  return (
    <div className="grid grid-cols-5">
      <aside className="col-span-1 p-4">
        <P5ShadowController />
      </aside>
      <div className="col-span-4 p-4"></div>
    </div>
  );
}
