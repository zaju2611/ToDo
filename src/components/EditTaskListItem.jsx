import { useState } from "react";

function EditTaskListItem({ taskContent, onEdit }) {
	const [content, setContent] = useState(taskContent);

	const handleChange = (event) => {
		setContent(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onEdit(content);
	};

	return (
		<form>
			<input className="input" value={content} onChange={handleChange} />
			<button onClick={handleSubmit}>Save</button>
		</form>
	);
}

export default EditTaskListItem;
