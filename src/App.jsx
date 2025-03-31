import { useEffect, useState } from 'react';
import styles from './App.module.css';

function App() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => setTodos(loadedTodos))
			.catch((err) => console.error(err))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			<div className={styles.appContainer}>
				<h1>Список дел</h1>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					<ul className={styles.todoList}>
						{todos.map((todo) => (
							<li className={styles.todoItem} key={todo.id}>
								{todo.title}
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
}

export default App;
