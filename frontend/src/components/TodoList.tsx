import React from 'react';
import { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const getProgressLabel = (progress: number) => {
    return `進捗度 ${progress}`;
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <span className="todo-text">{todo.text}</span>
          <span className="progress-badge">
            {getProgressLabel(todo.progress)}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
