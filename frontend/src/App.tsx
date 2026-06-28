import AmbientBackground from "./components/presence/AmbientBackground";
import { PresenceProvider } from "./components/presence/PresenceProvider";
import StartupSequence from "./components/presence/StartupSequence";

export default function App() {
  return (
    <PresenceProvider>
      <AmbientBackground />
      <StartupSequence />
    </PresenceProvider>
  );
}