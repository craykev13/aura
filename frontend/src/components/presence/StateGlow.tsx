import { usePresence } from "./usePresence";

export default function StateGlow() {
  const { state, message } = usePresence();

  return (
    <aside className={`state-glow state-glow--${state}`}>
      <div className="state-glow__label">AURA STATUS</div>
      <div className="state-glow__message">{message || "Waking"}</div>
    </aside>
  );
}