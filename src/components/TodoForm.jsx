import { useTodoContext } from '../context/TodoContext';

function TodoForm() {
  const { text, setText, handleAdd } = useTodoContext();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
}

export default TodoForm;