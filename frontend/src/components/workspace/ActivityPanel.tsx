import AuraWave from "../presence/AuraWave";
import StatusPulse from "../presence/StatusPulse";

const agents = [
  ["Research Agent", "Working"],
  ["Email Agent", "Working"],
  ["Document Agent", "Idle"],
  ["Calendar Agent", "Idle"],
  ["Report Agent", "Working"],
];

export default function ActivityPanel() {
  return (
    <aside className="aura-right-panel">
      <div className="activity-status-wrap">
        <StatusPulse />
      </div>

      <div className="side-card working-card">
        <h3>AURA is Working</h3>
        <AuraWave state="loading" />
        <p>Analyzing 12 emails</p>
      </div>

      <div className="side-card">
        <h3>Recent Activity</h3>
        <p>Summarized 8 emails</p>
        <p>Updated project roadmap</p>
        <p>Generated weekly report</p>
      </div>

      <div className="side-card">
        <h3>Active Agents</h3>

        {agents.map(([name, status]) => (
          <div className="agent-row" key={name}>
            <span>{name}</span>
            <span>{status}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}