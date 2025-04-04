import { useState } from 'react';

const useTodoFilters = (todos) => {
  const [sortTodosOn, setSortTodosOn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const todosSort = () => {
    setSortTodosOn(!sortTodosOn);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const getSortedTodos = () => {
    if (sortTodosOn) {
      return [...todos].sort((a, b) => a.title.localeCompare(b.title));
    }
    return todos;
  };

  const filteredTodos = getSortedTodos().filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return {
    sortTodosOn,
    searchQuery,
    todosSort,
    handleSearchInputChange,
    filteredTodos,
    setSortTodosOn
  };
};

export default useTodoFilters;
