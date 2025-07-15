import { useState } from 'react';
import { TodoContext } from './TodoContext';

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
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

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{
        todos,
        text,
        setText,
        handleAdd,
        handleDelete,
        handleToggle,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;