import TaskListItem from "./TaskListItem";

function TaskList({ tasks, onDelete, onEdit, onChange }) {
	const renderedTask = tasks.map((task, index) => {
		return (
			<TaskListItem
				key={index}
				task={task}
				onDelete={onDelete}
				onEdit={onEdit}
				onCheck={onChange}
			/>
		);
	});

	return (
		<div>
			<div>{renderedTask}</div>
		</div>
	);
}

export default TaskList;
