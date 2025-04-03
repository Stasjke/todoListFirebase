import { useEffect, useState } from 'react';
import styles from './App.module.css';

function App() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [modalAddCase, setModalAddCase] = useState(false);
	const [caseTitle, setCaseTitle] = useState('');
	const [editTitle, setEditTitle] = useState('');
	const [modalEditCase, setModalEditCase] = useState(false);
	const [selectedTodoId, setSelectedTodoId] = useState(null);
	const [sortTodosOn, setSortTodosOn] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	const todosSort = () => {
		setSortTodosOn(!sortTodosOn);
	};

	const getSortedTodos = () => {
		if (sortTodosOn) {
			return [...todos].sort((a, b) => a.title.localeCompare(b.title));
		}
		return todos;
	};

	const filteredTodos = getSortedTodos().filter((todo) =>
		todo.title.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	const handleInputChange = (event) => {
		setCaseTitle(event.target.value);
	};

	const handleEditInputChange = (event) => {
		setEditTitle(event.target.value);
	};

	const handleSearchInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const fetchTodos = () => {
		setIsLoading(true);
		fetch('http://localhost:3005/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => setTodos(loadedTodos))
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		fetchTodos();
	}, []);

	const modalPanel = () => {
		return (
			<div className={styles.addTodoPanel}>
				<input
					type="text"
					className={styles.addTodoInput}
					value={modalAddCase ? caseTitle : editTitle}
					onChange={modalAddCase ? handleInputChange : handleEditInputChange}
					placeholder={
						modalAddCase ? 'Введите название дела' : 'Введите изменение'
					}
				/>
				<button
					className={styles.addTodoButton}
					onClick={modalAddCase ? handleAddCase : handleEditCase}
				>
					Принять
				</button>
			</div>
		);
	};

	const requestAddCase = () => {
		setModalAddCase(true);
		setModalEditCase(false);
		setCaseTitle('');
	};

	const handleAddCase = () => {
		fetch('http://localhost:3005/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: caseTitle.charAt(0).toUpperCase() + caseTitle.slice(1),
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				fetchTodos();
				setModalAddCase(false);
				setCaseTitle('');
			});
	};

	const requestDeleteCase = (id) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				fetchTodos();
			});
	};

	const requestEditCase = (id, title) => {
		setModalEditCase(true);
		setModalAddCase(false);
		setSelectedTodoId(id);
		setEditTitle(title);
	};

	const handleEditCase = () => {
		fetch(`http://localhost:3005/todos/${selectedTodoId}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: editTitle.charAt(0).toUpperCase() + editTitle.slice(1),
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				fetchTodos();
				setModalEditCase(false);
				setSelectedTodoId(null);
				setEditTitle('');
			});
	};

	return (
		<>
			<div className={styles.appContainer}>
				<h1>Список дел</h1>
				<input
					type="text"
					placeholder="Поиск дел..."
					value={searchQuery}
					onChange={handleSearchInputChange}
					style={{ width: '100%' }}
				/>
				<button className={styles.button} onClick={requestAddCase}>
					Добавить
				</button>

				<button
					className={styles.button}
					onClick={todosSort}
					style={{
						backgroundColor: sortTodosOn ? '#4CAF50' : '#f44336',
						color: 'white',
					}}
				>
					{sortTodosOn ? `Sort On \u2191` : 'Sort Off \u2193'}
				</button>

				{modalAddCase ? modalPanel() : null}

				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					<ul className={styles.todoList}>
						{filteredTodos.map((todo, index) => (
							<li className={styles.todoItem} key={todo.id}>
								{index + 1}. {todo.title}
								<button
									className={styles.buttonCase}
									onClick={() => requestDeleteCase(todo.id)}
									style={{ backgroundColor: 'red' }}
								>
									Удалить
								</button>
								<button
									className={styles.buttonCase}
									onClick={() => requestEditCase(todo.id, todo.title)}
								>
									Изменить
								</button>
							</li>
						))}
					</ul>
				)}
				{modalEditCase ? modalPanel() : null}
			</div>
		</>
	);
}

export default App;
