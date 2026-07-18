import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ProgressPage from "./components/ProgressPage";
import RecoveryMode from "./components/RecoveryMode";
import RecoveryPlan from "./components/RecoveryPlan";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [recoveryReason, setRecoveryReason] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
    setCurrentPage("tasks");
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function increaseProgress(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }

      const newProgress = Math.min(task.progress + 25, 100);

      return {
        ...task,
        progress: newProgress,
        overdue: newProgress === 100 ? false : task.overdue,
      };
    });

    setTasks(updatedTasks);
  }

  const overdueTask = tasks.find((task) => task.overdue);

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "dashboard" && (
        <Dashboard
          tasks={tasks}
          setCurrentPage={setCurrentPage}
          overdueTask={overdueTask}
        />
      )}

      {currentPage === "add" && <TaskForm addTask={addTask} />}

      {currentPage === "tasks" && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          increaseProgress={increaseProgress}
        />
      )}

      {currentPage === "progress" && <ProgressPage tasks={tasks} />}

      {currentPage === "recovery" && overdueTask && (
        <RecoveryMode
          task={overdueTask}
          recoveryReason={recoveryReason}
          setRecoveryReason={setRecoveryReason}
          setCurrentPage={setCurrentPage}
        />
      )}

      {currentPage === "recoveryPlan" && overdueTask && (
        <RecoveryPlan
          task={overdueTask}
          recoveryReason={recoveryReason}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default App;
