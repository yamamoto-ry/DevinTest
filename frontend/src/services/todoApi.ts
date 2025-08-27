import axios from 'axios';
import { Todo, CreateTodoRequest } from '../types/todo';

const API_BASE_URL = '/api';

export const todoApi = {
  async getTodos(): Promise<Todo[]> {
    const response = await axios.get(`${API_BASE_URL}/todos`);
    return response.data;
  },

  async createTodo(todo: CreateTodoRequest): Promise<Todo> {
    const response = await axios.post(`${API_BASE_URL}/todos`, todo);
    return response.data;
  }
};
