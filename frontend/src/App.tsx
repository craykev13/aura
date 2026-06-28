import AmbientBackground from "./components/presence/AmbientBackground";
import AuraEnvironment from "./components/presence/AuraEnvironment";
import { PresenceProvider } from "./components/presence/PresenceProvider";

export default function App() {
  return (
    <PresenceProvider>
      <AmbientBackground />
      <AuraEnvironment />
    </PresenceProvider>
  );
}