import AuraWave from "../presence/AuraWave";
import StateGlow from "../presence/StateGlow";
import StatusPulse from "../presence/StatusPulse";

const navItems = [
  "Home",
  "Tasks",
  "Email",
  "Calendar",
  "Documents",
  "Projects",
  "Reports",
  "Knowledge",
  "Tools",
  "Agents",
];

const actionItems = [
  "Reply to Sarah about the Q1 proposal",
  "Review contract with Acme Corp",
  "Weekly sales report is ready",
  "Prepare for meeting with John at 2:00 PM",
];

const agents = [
  ["Research Agent", "Working"],
  ["Email Agent", "Working"],
  ["Document Agent", "Idle"],
  ["Calendar Agent", "Idle"],
  ["Report Agent", "Working"],
];

export default function WorkspaceShell() {
  return (
    <main className="aura-dashboard">
      <aside className="aura-sidebar">
        <div className="aura-wordmark">AURA</div>

        <nav className="aura-nav">
          {navItems.map((item) => (
            <button
              key={item}
              className={item === "Home" ? "aura-nav-item active" : "aura-nav-item"}
            >
              {item}
            </button>
          ))}
        </nav>

        <StateGlow />
      </aside>

      <section className="aura-main">
        <header className="aura-topbar">
          <div className="aura-command">Ask AURA or type a command...</div>
          <StatusPulse />
        </header>

        <section className="aura-hero">
          <h1>Good Evening, Kevin.</h1>
          <p>AURA is ready to assist you.</p>
          <div className="aura-hero-wave">
            <AuraWave state="success" />
          </div>
        </section>

        <section className="overview-grid">
          {["14 Unread Emails", "3 Documents Need Review", "5 Tasks Due Today", "2 Events Today"].map(
            (item) => (
              <div className="overview-card" key={item}>
                {item}
              </div>
            ),
          )}
        </section>

        <section className="suggested-actions">
          <h2>Suggested Actions</h2>
          {actionItems.map((item) => (
            <div className="action-row" key={item}>
              <span>{item}</span>
              <button>Review</button>
            </div>
          ))}
        </section>

        <section className="handle-everything">
          <span>✦ What would you like AURA to handle?</span>
          <button>Handle Everything</button>
        </section>
      </section>

      <aside className="aura-right-panel">
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
    </main>
  );
}