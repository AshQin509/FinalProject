function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar">
      <div className="nav-spacer" />

      <div className="nav-links">
        <button
          className={currentPage === "dashboard" ? "active" : ""}
          onClick={() => setCurrentPage("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={currentPage === "tasks" ? "active" : ""}
          onClick={() => setCurrentPage("tasks")}
        >
          View All Tasks
        </button>

        <button
          className={currentPage === "progress" ? "active" : ""}
          onClick={() => setCurrentPage("progress")}
        >
          Progress
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
