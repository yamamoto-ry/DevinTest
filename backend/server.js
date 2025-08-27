const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let todos = [];
let nextId = 1;

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { text, progress } = req.body;
  
  if (!text || typeof text !== 'string' || text.trim() === '') {
    return res.status(400).json({ error: 'タスクのテキストが必要です' });
  }
  
  if (!progress || typeof progress !== 'number' || progress < 1 || progress > 5) {
    return res.status(400).json({ error: '進捗度は1-5の数値で指定してください' });
  }
  
  const newTodo = {
    id: nextId++,
    text: text.trim(),
    progress: progress,
    createdAt: new Date().toISOString()
  };
  
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(PORT, () => {
  console.log(`Todo Backend API server running on port ${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  GET  http://localhost:${PORT}/todos`);
  console.log(`  POST http://localhost:${PORT}/todos`);
});
