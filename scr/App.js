import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // 할 일 추가
  const addTodo = () => {
    if (input.trim() === '') return;
    
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInput('');
  };

  // 할 일 삭제
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 완료 토글
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>📝 Todo List</h1>

        {/* 입력 영역 */}
        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') addTodo();
            }}
            placeholder="할 일을 입력하세요"
          />
          <button onClick={addTodo}>추가</button>
        </div>

        {/* Todo 리스트 */}
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <div className="todo-content">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span
                  className={todo.completed ? 'completed' : ''}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.text}
                </span>
              </div>
              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>

        {/* 통계 */}
        {todos.length > 0 && (
          <div className="stats">
            <p>전체: {todos.length}개</p>
            <p>완료: {todos.filter(t => t.completed).length}개</p>
            <p>미완료: {todos.filter(t => !t.completed).length}개</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
