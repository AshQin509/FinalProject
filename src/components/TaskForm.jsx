import { useState } from "react";

function TaskForm({ addTask }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskType, setTaskType] = useState("Homework");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [progress, setProgress] = useState("");
  const [overdue, setOverdue] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === "" || dueDate === "") {
      alert("Please enter the task name and due date.");
      return;
    }

    const newTask = {
      id: Date.now(),
      name,
      description,
      dueDate,
      taskType,
      estimatedTime,
      difficulty,
      progress: Number(progress) || 0,
      overdue,
      steps: [
        "Read the task requirements",
        "Start the first small step",
        "Continue working",
        "Check and revise the work",
      ],
    };

    addTask(newTask);
  }

  return (
    <main className="page-container form-page">
      <section className="form-card">
        <h1>Add a New Task</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="task-name">Task Name</label>
          <input
            id="task-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <label htmlFor="due-date">Due Date</label>
          <input
            id="due-date"
            type="date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />

          <label htmlFor="task-type">Task Type</label>
          <select
            id="task-type"
            value={taskType}
            onChange={(event) => setTaskType(event.target.value)}
          >
            <option>Homework</option>
            <option>Project</option>
            <option>Reading</option>
            <option>Exam</option>
            <option>Other</option>
          </select>

          <label htmlFor="estimated-time">Estimated Time in Hours</label>
          <input
            id="estimated-time"
            type="number"
            min="1"
            value={estimatedTime}
            onChange={(event) => setEstimatedTime(event.target.value)}
          />

          <label htmlFor="difficulty">Difficulty</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <label htmlFor="progress">Current Progress in Percent</label>
          <input
            id="progress"
            type="number"
            min="0"
            max="100"
            value={progress}
            onChange={(event) => setProgress(event.target.value)}
          />

          <label className="checkbox-label" htmlFor="overdue">
            <input
              id="overdue"
              type="checkbox"
              checked={overdue}
              onChange={(event) => setOverdue(event.target.checked)}
            />
            This task is overdue
          </label>

          <button className="primary-button" type="submit">
            Break Down My Task
          </button>
        </form>
      </section>
    </main>
  );
}
export default TaskForm;
