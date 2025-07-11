import { useState } from 'react';

function FormPractice() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    if (name.trim() === '') {
      setMessage('이름을 입력해주세요.');
    } else {
      setMessage(`${name}님 반갑습니다!`);
    }
  };

  return (
    <div>
      <h2>👤 이름 인사 폼</h2>
      <input type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={handleChange}
      />
      <button onClick={handleClick}>인사하기</button>
      <p>{message}</p>
    </div>
  );
}

export default FormPractice;

