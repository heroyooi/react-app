import { useState, useEffect } from 'react';

function GreetingTimer() {
  const [message, setMessage] = useState('안녕하세요!');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('5초 지남 – 인사 종료');
    }, 5000); // 5초 후 실행

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, []);

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

export default GreetingTimer;

