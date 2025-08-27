import React, { useState } from 'react';

interface TodoFormProps {
  onSubmit: (text: string, progress: number) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [progress, setProgress] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text.trim(), progress);
      setText('');
      setProgress(1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいタスクを入力..."
        required
      />
      <select
        value={progress}
        onChange={(e) => setProgress(Number(e.target.value))}
        className="progress-select"
      >
        <option value={1}>進捗度 1</option>
        <option value={2}>進捗度 2</option>
        <option value={3}>進捗度 3</option>
        <option value={4}>進捗度 4</option>
        <option value={5}>進捗度 5</option>
      </select>
      <button type="submit">追加</button>
    </form>
  );
};

export default TodoForm;
