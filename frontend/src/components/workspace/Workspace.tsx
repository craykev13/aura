import ActivityPanel from "./ActivityPanel";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import WelcomePanel from "./WelcomePanel";
import WorkspaceContent from "./WorkspaceContent";
import { useState } from "react";

export default function Workspace() {
  const [isScrolled, setIsScrolled] = useState(false);
  return (
    <main className="aura-dashboard">
      <Sidebar />

      <section
        className="aura-main"
        onScroll={(e) => setIsScrolled(e.currentTarget.scrollTop > 60)}
      >
         <Topbar />
         <WelcomePanel isScrolled={isScrolled} />
         <WorkspaceContent />
      </section>

      <ActivityPanel />
    </main>
  );
}