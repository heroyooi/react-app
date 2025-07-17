import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';
import ThemeToggle from './components/ThemeToggle';
import './styles/theme.css';

function AppContent() {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div className="app-container">
        <h1>🌗 다크모드 (Context 적용)</h1>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}