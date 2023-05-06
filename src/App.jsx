import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
	const [tasks, setTasks] = useState([]);

	const handleAddTask = (content) => {
		const newTask = { content };
		setTasks([...tasks, newTask]);
	};

	const handleDeleteTask = (index) => {
		const updatedTasks = [...tasks];
		updatedTasks.splice(index, 1);
		setTasks(updatedTasks);
	};

	const handleEditTask = (content, newTaskContent) => {
		const updatedTasks = tasks.map((task) => {
			if (content === task.content) {
				return { ...task, content: newTaskContent };
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	return (
		<div>
			<h3>What you have to do today?</h3>
			<AddTaskForm onAdd={handleAddTask} />
			<TaskList
				tasks={tasks}
				onDelete={handleDeleteTask}
				onEdit={handleEditTask}
			/>
		</div>
	);
}
export default App;
