function ProgressPage({ tasks }) {
  const completedTasks = tasks.filter((task) => task.progress === 100).length;
  const inProgressTasks = tasks.filter(
    (task) => task.progress > 0 && task.progress < 100,
  ).length;
  const overdueTasks = tasks.filter((task) => task.overdue).length;
  const points = tasks.reduce((total, task) => total + task.progress, 0);
  const hasTasks = tasks.length > 0;

  return (
    <main className="page-container">
      <h1>Your Progress</h1>

      <div className="progress-summary">
        <p>Tasks Completed: {hasTasks ? completedTasks : ""}</p>
        <p>Points: {hasTasks ? points : ""}</p>
      </div>

      <div className="progress-columns">
        <section className="progress-box">
          <h2>Completed</h2>
          <span>{hasTasks ? completedTasks : ""}</span>
        </section>

        <section className="progress-box">
          <h2>In Progress</h2>
          <span>{hasTasks ? inProgressTasks : ""}</span>
        </section>

        <section className="progress-box">
          <h2>Overdue</h2>
          <span>{hasTasks ? overdueTasks : ""}</span>
        </section>
      </div>
    </main>
  );
}

export default ProgressPage;
