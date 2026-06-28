import StartupSequence from "./StartupSequence";
import { usePresence } from "./usePresence";
import WorkspaceShell from "../workspace/WorkspaceShell";

export default function AuraEnvironment() {
  const { state } = usePresence();

  const showWorkspace = state === "ready";

  return (
    <>
      <div className={showWorkspace ? "screen-fade screen-fade--out" : "screen-fade"}>
        <StartupSequence />
      </div>

      <div className={showWorkspace ? "workspace-fade workspace-fade--in" : "workspace-fade"}>
        <WorkspaceShell />
      </div>
    </>
  );
}