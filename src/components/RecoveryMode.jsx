function RecoveryMode({
  task,
  recoveryReason,
  setRecoveryReason,
  setCurrentPage,
}) {
  const reasons = [
    "I ran out of time",
    "I felt overwhelmed",
    "I forgot about the task",
    "I was not feeling well",
    "Other",
  ];

  return (
    <main className="page-container">
      <section className="recovery-page">
        <h1>Recovery Mode</h1>
        <p>Do not worry. Let us make a new plan.</p>

        <div className="recovery-task-info">
          <h2>{task.name}</h2>
          <p>{task.estimatedTime} Hours Left | Overdue</p>
        </div>

        <h3>What prevented you from completing this task?</h3>

        <div className="reason-list">
          {reasons.map((reason) => (
            <label key={reason} className="reason-option">
              <input
                type="radio"
                name="recovery-reason"
                value={reason}
                checked={recoveryReason === reason}
                onChange={(event) => setRecoveryReason(event.target.value)}
              />
              {reason}
            </label>
          ))}
        </div>

        <button
          className="primary-button"
          disabled={recoveryReason === ""}
          onClick={() => setCurrentPage("recoveryPlan")}
        >
          Continue
        </button>
      </section>
    </main>
  );
}

export default RecoveryMode;
