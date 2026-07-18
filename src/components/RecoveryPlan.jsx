function RecoveryPlan({ task, recoveryReason, setCurrentPage }) {
  return (
    <main className="page-container">
      <section className="recovery-page">
        <h1>Your Recovery Plan</h1>

        <p>
          We created a smaller plan for <strong>{task.name}</strong>.
        </p>

        <p>Reason selected: {recoveryReason}</p>

        <div className="plan-section">
          <h2>Today</h2>

          <ul>
            <li>Review the requirements again - 20 min</li>
            <li>Go over the unfinished work - 30 min</li>
          </ul>
        </div>

        <div className="plan-section">
          <h2>Tomorrow</h2>

          <ul>
            <li>Add more detail - 45 min</li>
            <li>Fianl revise - 30 min</li>
          </ul>
        </div>

        <h3>You are back on track!</h3>

        <button
          className="primary-button"
          onClick={() => setCurrentPage("dashboard")}
        >
          Use This Plan
        </button>
      </section>
    </main>
  );
}

export default RecoveryPlan;
