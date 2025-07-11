import { useState } from 'react';

function MultiCounter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h2>🔢 카운터</h2>
      <p>현재 숫자: {count}</p>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleReset}>초기화</button>
    </div>
  );
}

export default MultiCounter;