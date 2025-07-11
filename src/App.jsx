import TaskList from './components/TaskList';

function App() {
  const tasks = ['React 공부하기', '운동하기', '블로그 글 쓰기'];
  // const tasks = []; // 할 일이 없을 때 테스트용

  return (
    <div>
      <h1>React 조건부 & 리스트 렌더링</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;