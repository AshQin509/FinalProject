import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask, increaseProgress }) {
  return (
    <main className="page-container">
      <h1>View All Tasks</h1>

      {tasks.length === 0 ? (
        <div className="empty-message">
          <h2>No tasks yet</h2>
          <p>Add a new task from the Dashboard.</p>
        </div>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              increaseProgress={increaseProgress}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default TaskList;
