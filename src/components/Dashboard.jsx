function Dashboard({ tasks, setCurrentPage, overdueTask }) {
  const visibleTasks = tasks.filter((task) => !task.overdue).slice(0, 2);

  return (
    <main className="dashboard-page">
      <section className="dashboard-content">
        <div className="dashboard-top-row">
          <h1>Today</h1>

          <button className="primary-button" onClick={() => setCurrentPage("add")}>
            Add a New Task
          </button>
        </div>

        {visibleTasks.length === 0 ? (
          <p>You do not have any tasks yet.</p>
        ) : (
          <ul className="today-list">
            {visibleTasks.map((task) => (
              <li key={task.id}>
                <span className="task-line">
                  {task.name} - {task.progress}%
                </span>
                <span className="task-description">{task.description}</span>
              </li>
            ))}
          </ul>
        )}

        {overdueTask && (
          <section className="recovery-card">
            <h3>Looks like you are falling behind?</h3>

            <p>This task has been over due for 2 days:</p>

            <strong>{overdueTask.name}</strong>

            <button
              className="outline-button"
              onClick={() => setCurrentPage("recovery")}
            >
              Enter Recovery Mode
            </button>
          </section>
        )}
      </section>
    </main>
  );
}

export default Dashboard;
