import { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import './styles/theme.css'; // 전역 스타일 import

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div className='app-container'>
        <h1>🌗 다크모드 예제</h1>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}

export default App;
