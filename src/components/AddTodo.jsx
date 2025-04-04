import styles from '../App.module.css';

function AddTodo({ onClick, todosSort, sortTodosOn }) {
	return (
		<div className={styles.addTodoContainer}>
			<button className={styles.button} onClick={onClick}>
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
		</div>
	);
}

export default AddTodo;
