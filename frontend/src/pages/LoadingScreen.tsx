import { useEffect, useState } from "react";
import AuraWave from "../components/ambient/AuraWave";

const messages = [
  "Initializing Workspace",
  "Loading Memory",
  "Checking Calendar",
  "Connecting Email",
  "Preparing Dashboard",
];

export default function LoadingScreen() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMessageIndex((current) => {
        if (current === messages.length - 1) return current;
        return current + 1;
      });
    }, 1200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="loading-screen">
      <section className="loading-content">
        <AuraWave state="loading" />

        <h1 className="loading-logo">AURA</h1>

        <p className="loading-message">{messages[messageIndex]}</p>
      </section>
    </main>
  );
}
