import { useState } from "react";
import EditTaskListItem from "./EditTaskListItem";

function TaskListItem({ content, onDelete, onEdit }) {
	const [showEdit, setShowEdit] = useState(false);

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	const handleEditSubmit = (newContent) => {
		onEdit(content, newContent);
		setShowEdit(false);
	};

	let listItem = <div>{content}</div>;

	if (showEdit) {
		listItem = (
			<EditTaskListItem taskContent={content} onEdit={handleEditSubmit} />
		);
	}

	return (
		<div>
			{listItem}
			<button onClick={handleEditClick}>Update</button>
			<button onClick={onDelete}>Delete</button>
		</div>
	);
}

export default TaskListItem;
