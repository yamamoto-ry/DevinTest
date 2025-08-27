import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from './types/todo';
import { todoApi } from './services/todoApi';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      const fetchedTodos = await todoApi.getTodos();
      setTodos(fetchedTodos);
      setError(null);
    } catch (err) {
      setError('タスクの読み込みに失敗しました');
      console.error('Failed to load todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (text: string, progress: number) => {
    try {
      const newTodo = await todoApi.createTodo({ text, progress });
      setTodos(prev => [...prev, newTodo]);
      setError(null);
    } catch (err) {
      setError('タスクの追加に失敗しました');
      console.error('Failed to add todo:', err);
    }
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>Todo リスト</h1>
        
        <TodoForm onSubmit={handleAddTodo} />
        
        {error && (
          <div style={{ color: 'red', marginBottom: '1rem' }}>
            {error}
          </div>
        )}
        
        {loading ? (
          <div>読み込み中...</div>
        ) : (
          <TodoList todos={todos} />
        )}
        
        {!loading && todos.length === 0 && (
          <div>タスクがありません。新しいタスクを追加してください。</div>
        )}
      </div>
    </div>
  );
}

export default App;
