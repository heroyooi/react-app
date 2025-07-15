import { useEffect, useState } from 'react';
import { TodoContext } from './TodoContext';

function TodoProvider({ children }) {
  const LOCAL_KEY = 'my_todos';

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState('');

  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newTodo = {
      id: Date.now(),
      content: trimmed,
      isDone: false,
    };
    setTodos([newTodo, ...todos]);
    setText('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDeleteDone = () => {
    // 완료된 항목만 걸러내서 삭제
    setTodos(todos.filter((todo) => !todo.isDone));
  };

  const handleToggle = (id) => {
    // 1. 기존 todos 배열을 map으로 순회하면서
    setTodos(
      todos.map((todo) =>
        // 2. 현재 순회 중인 todo의 id가 인자로 받은 id와 같으면
        todo.id === id
          ? // 3. isDone 상태를 반전시킨 새로운 객체를 반환 (true <-> false)
            { ...todo, isDone: !todo.isDone }
          : // 4. 그렇지 않으면 기존 객체 그대로 유지
            todo
      )
    );
  };

  // ✅ todos 변경 시 localStorage에 저장
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        text,
        setText,
        handleAdd,
        handleDelete,
        handleDeleteDone,
        handleToggle,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
