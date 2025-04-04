import styles from '../App.module.css';

function TodoList({ todos, onDelete, onEdit }) {
	return (
		<ul className={styles.todoList}>
			{todos.map((todo, index) => (
				<li className={styles.todoItem} key={todo.id}>
					{index + 1}. {todo.title}
					<div className={styles.buttonsContainer}>
						<button
							className={styles.buttonCase}
							style={{ backgroundColor: 'red' }}
							onClick={() => onDelete(todo.id)}
						>
							Удалить
						</button>
						<button
							className={styles.buttonCase}
							onClick={() => onEdit(todo.id, todo.title)}
						>
							Изменить
						</button>
					</div>
				</li>
			))}
		</ul>
	);
}

export default TodoList;
