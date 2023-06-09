import { useState } from "react";

function AddTaskForm({ onAdd }) {
	const [taskContent, setTaskContent] = useState("");
	const [isInputValid, setIsInputValid] = useState(true);

	const handleChange = (event) => {
		setTaskContent(event.target.value);
		setIsInputValid(true);
	};

	const handleAddTask = (event) => {
		event.preventDefault();
		if (taskContent.trim() === "") {
			setIsInputValid(false);
			return;
		}
		onAdd(taskContent);
		setTaskContent("");
	};

	return (
		<div>
			<form onSubmit={handleAddTask} className="taskForm">
				<input
					type="type"
					value={taskContent}
					onChange={handleChange}
					className="addTaskInput"
				/>
				<button type="submit" className="addTaskButton">
					+ Add task
				</button>
			</form>
			{!isInputValid && <p style={{ color: "red" }}>Please enter a task.</p>}
		</div>
	);
}
export default AddTaskForm;
