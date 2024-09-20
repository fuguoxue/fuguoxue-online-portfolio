import ProjectInfoSection from "@/components/projectInfoSection";
import { WebsiteTitle, BackTab } from "@/components/webpageReusables";

export default function Main() {
  return (
    <div className="grid grid-cols-5 min-h-screen m-4">
      <aside className="col-span-1 p-4">
        <div className="sticky top-0">
          <WebsiteTitle />
          <ProjectInfoSection projectName="The Surface City" />
          <BackTab />
        </div>
      </aside>
      <main className="col-span-3 p-4">
        <p>Some text</p>
      </main>
      <div className="col-span-1 p-4">
        <p>Next</p>
      </div>
    </div>
  );
}
