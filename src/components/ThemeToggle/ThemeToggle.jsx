import "./ThemeToggle.css";

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      className="theme-btn"
      onClick={toggleTheme}
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;