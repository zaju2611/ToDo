import { useState } from "react";
import { FaSave } from "react-icons/fa";

function EditTaskListItem({ task, onEdit }) {
	const [content, setContent] = useState(task.content);

	const handleChange = (event) => {
		setContent(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onEdit(task.id, content);
	};

	return (
		<form className="editForm">
			<input className="input" value={content} onChange={handleChange} />
			<button className="saveButton" onClick={handleSubmit}>
				<FaSave className="icon" />
			</button>
		</form>
	);
}

export default EditTaskListItem;
