export interface Todo {
  id: number;
  text: string;
  progress: number; // 1-5の進捗度合い
  createdAt: string;
}

export interface CreateTodoRequest {
  text: string;
  progress: number;
}
