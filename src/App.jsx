import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleAdd = () => {
    const trimmed = text.trim();
    if (trimmed === '') return;

    const newTodo = {
      id: Date.now(),
      content: trimmed,
    };
    setTodos([newTodo, ...todos]);
    setText('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>📝 Todo 리스트</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='할 일을 입력하세요'
        />
        <button onClick={handleAdd}>추가</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            {todo.content}
            <button
              onClick={() => handleDelete(todo.id)}
              style={{ marginLeft: '10px' }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>

      <p>총 {todos.length}개의 할 일이 있습니다.</p>
    </div>
  );
}

export default App;
