import StateGlow from "../presence/StateGlow";

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

export default function Sidebar() {
  return (
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
  );
}