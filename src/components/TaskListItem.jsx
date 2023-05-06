import { useState } from "react";
import EditTaskListItem from "./EditTaskListItem";

function TaskListItem({ content, onDelete, onEdit }) {
	const [showEdit, setShowEdit] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	const handleEditSubmit = (newContent) => {
		onEdit(content, newContent);
		setShowEdit(false);
	};

	const handleCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
	};
	let updateButton = <button onClick={handleEditClick}>Update</button>;
	let deleteButton = <button onClick={onDelete}>Delete</button>;

	if (isChecked) {
		content = <span style={{ textDecoration: "line-through" }}>{content}</span>;
		updateButton = null;
		deleteButton = null;
	}

	let listItem = <div>{content}</div>;

	if (showEdit) {
		listItem = (
			<EditTaskListItem taskContent={content} onEdit={handleEditSubmit} />
		);
	}

	return (
		<div>
			<input type="checkbox" onChange={handleCheckboxChange} />
			{listItem}
			{updateButton}
			{deleteButton}
		</div>
	);
}

export default TaskListItem;
