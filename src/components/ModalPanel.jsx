import styles from '../App.module.css';

function ModalPanel({
	handleInputChange,
	handleAddCase,
	caseTitle,
	setModalAddCase,
	setCaseTitle,
}) {
	return (
		<div className={styles.addTodoPanel}>
			<input
				type="text"
				className={styles.addTodoInput}
				value={caseTitle}
				onChange={handleInputChange}
				placeholder="Введите название дела"
			/>
			<button className={styles.addTodoButton} onClick={handleAddCase}>
				Принять
			</button>
			<button
				className={styles.addTodoButton}
				onClick={() => {
					setModalAddCase(false);
					setCaseTitle('');
				}}
			>
				Отмена
			</button>
		</div>
	);
}

export default ModalPanel;
