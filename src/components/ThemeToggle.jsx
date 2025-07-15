function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '☀️ 라이트 모드' : '🌙 다크 모드'}
    </button>
  );
}

export default ThemeToggle;
