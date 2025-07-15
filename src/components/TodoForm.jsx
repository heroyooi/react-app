import { useTodoContext } from '../context/TodoContext';

function TodoForm() {
  const { text, setText, handleAdd } = useTodoContext();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  // ✅ 입력값에서 공백 제거 후 비었는지 확인
  const isDisabled = text.trim() === '';

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='할 일을 입력하세요'
      />
      {/* ✅ 조건부 disabled 속성 적용 */}
      <button onClick={handleAdd} disabled={isDisabled}>
        추가
      </button>
    </div>
  );
}

export default TodoForm;
