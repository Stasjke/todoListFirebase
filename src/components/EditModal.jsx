import styles from '../App.module.css';

function EditModal({
	editTitle,
	handleEditInputChange,
	handleEditCase,
	setModalEditCase,
	setEditTitle,
	setSelectedTodoId,
}) {
	return (
		<div className={styles.addTodoPanel}>
			<input
				type="text"
				className={styles.addTodoInput}
				value={editTitle}
				onChange={handleEditInputChange}
				placeholder="Введите изменение"
			/>
			<button className={styles.addTodoButton} onClick={handleEditCase}>
				Принять
			</button>
			<button
				className={styles.addTodoButton}
				onClick={() => {
					setModalEditCase(false);
					setSelectedTodoId(null);
					setEditTitle('');
				}}
			>
				Отмена
			</button>
		</div>
	);
}

export default EditModal;
