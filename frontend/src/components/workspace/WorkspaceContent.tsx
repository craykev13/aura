const overviewItems = [
  "14 Unread Emails",
  "3 Documents Need Review",
  "5 Tasks Due Today",
  "2 Events Today",
];

const actionItems = [
  "Reply to Sarah about the Q1 proposal",
  "Review contract with Acme Corp",
  "Weekly sales report is ready",
  "Prepare for meeting with John at 2:00 PM",
];

export default function WorkspaceContent() {
  return (
    <section className="workspace-content">
      <section className="overview-grid">
        {overviewItems.map((item) => (
          <div className="overview-card" key={item}>
            {item}
          </div>
        ))}
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
    </section>
  );
}