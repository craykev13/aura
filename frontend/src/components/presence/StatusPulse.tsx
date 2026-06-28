import { usePresence } from "./usePresence";

const labels = {
  awakening: "WAKING",
  greeting: "GREETING",
  loading: "LOADING",
  thinking: "THINKING",
  ready: "READY",
  success: "READY",
  error: "ATTENTION",
};

export default function StatusPulse() {
  const { state } = usePresence();

  return (
    <div className={`status-pulse status-pulse--${state}`}>
      <span className="status-dot" />
      <span>AURA</span>
      <span className="status-divider">•</span>
      <span>{labels[state]}</span>
    </div>
  );
}