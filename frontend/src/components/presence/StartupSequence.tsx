import AuraWave from "./AuraWave";
import StatusPulse from "./StatusPulse";
import { usePresence } from "./usePresence";

export default function StartupSequence() {
  const presence = usePresence();

  return (
    <main className="startup-sequence">
      <StatusPulse />

      <section className="startup-content">
        <div className="startup-wave-wrap">
          <AuraWave state={presence.state === "ready" ? "success" : "loading"} />
        </div>

        <h1 className="startup-logo">AURA</h1>

        <p key={presence.message} className="startup-message">
          {presence.message}
        </p>
      </section>
    </main>
  );
}