function TaskCard({ task, deleteTask, increaseProgress }) {
  return (
    <article className="task-card">
      <div className="task-main">
        <h2>{task.name}</h2>

        <p>{task.description}</p>

        <p>
          Due {task.dueDate} | {task.difficulty} | {task.progress}%
        </p>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${task.progress}%` }}
          />
        </div>

        <div className="task-buttons">
          <button
            className="small-button"
            onClick={() => increaseProgress(task.id)}
            disabled={task.progress === 100}
          >
            {task.progress === 100 ? "Completed" : "Add 25% Progress"}
          </button>

          <button className="delete-button" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      </div>

      <div className="task-steps">
        <h3>Suggested Steps</h3>

        <ul>
          {task.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default TaskCard;
