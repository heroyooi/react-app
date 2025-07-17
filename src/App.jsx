import { useEffect, useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import './styles/theme.css';

function App() {
  // ✅ 1. 초기 상태를 localStorage에서 가져오기
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    return stored === 'true'; // 문자열 → boolean
  });

  // ✅ 2. 상태가 바뀔 때 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div className="app-container">
        <h1>🌗 다크모드 예제 (localStorage 적용)</h1>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}

export default App;