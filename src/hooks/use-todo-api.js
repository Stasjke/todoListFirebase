import { useEffect } from 'react';

const useTodoApi = (todos, setTodos, setIsLoading) => {
  const API_URL = 'http://localhost:3005/todos';

  const fetchTodos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      const loadedTodos = await response.json();
      setTodos(loadedTodos);
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = async (title) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ title: title.charAt(0).toUpperCase() + title.slice(1) }),
    });
    await fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    await fetchTodos();
  };

  const editTodo = async (id, title) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ title: title.charAt(0).toUpperCase() + title.slice(1) }),
    });
    await fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { fetchTodos, addTodo, deleteTodo, editTodo };
};

export default useTodoApi;
