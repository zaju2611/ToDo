import { useState } from "react";
import EditTaskListItem from "./EditTaskListItem";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

function TaskListItem({ task, onDelete, onEdit }) {
	const [showEdit, setShowEdit] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	const handleEditSubmit = (id, newContent) => {
		onEdit(id, newContent);
		setShowEdit(false);
	};

	const handleCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
	};
	let updateButton = (
		<button className="updateButton" onClick={handleEditClick}>
			<BsFillPencilFill className="icon" />
		</button>
	);

	const handleDelete = () => {
		onDelete(task.id);
	};

	let deleteButton = (
		<button className="deleteButton" onClick={handleDelete}>
			<AiFillDelete className="icon" />
		</button>
	);

	if (isChecked) {
		updateButton = null;
		deleteButton = null;
	}

	let listItem = <div className="taskText">{task.content}</div>;

	if (showEdit) {
		listItem = <EditTaskListItem task={task} onEdit={handleEditSubmit} />;
	}
	return (
		<div className="taskListItem">
			<input
				type="checkbox"
				onChange={handleCheckboxChange}
				className="checkboxInput"
			/>
			{listItem}
			<div className="buttons">
				{updateButton}
				{deleteButton}
			</div>
		</div>
	);
}

export default TaskListItem;
