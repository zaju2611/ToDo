import TaskListItem from "./TaskListItem";

function TaskList({ tasks, onDelete, onEdit }) {
	const renderedTask = tasks.map((task, index) => {
		return (
			<TaskListItem
				key={index}
				content={task.content}
				onDelete={onDelete}
				onEdit={onEdit}
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
