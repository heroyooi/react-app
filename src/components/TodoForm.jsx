function TodoForm({ text, onChange, onAdd, onKeyDown }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input type="text"
        value={text}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={onAdd}>추가</button>
    </div>
  );
}

export default TodoForm;