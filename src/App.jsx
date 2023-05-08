import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import TaskSummary from "./components/TaskSummary";

function App() {
	const [tasks, setTasks] = useState([]);

	const fetchTasks = async () => {
		const response = await axios.get("http://localhost:3001/tasks");
		setTasks(response.data);
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	const handleAddTask = async (content) => {
		const response = await axios.post("http://localhost:3001/tasks", {
			content,
			isDone: false,
		});

		const newTasks = [...tasks, response.data];
		setTasks(newTasks);
	};

	const handleDeleteTask = async (index) => {
		await axios.delete(`http://localhost:3001/tasks/${index}`);

		const updatedTasks = tasks.filter((task) => {
			return task.id !== index;
		});

		setTasks(updatedTasks);
	};

	const handleEditTask = async (index, newTaskContent) => {
		const response = await axios.put(`http://localhost:3001/tasks/${index}`, {
			content: newTaskContent,
		});

		const updatedTasks = tasks.map((task) => {
			if (task.id === index) {
				return { ...task, ...response.data };
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	const handleCheckTask = async (id, content, isDone) => {
		await axios.put(`http://localhost:3001/tasks/${id}`, {
			content: content,
			isDone: isDone,
		});
		fetchTasks();
	};

	let doneTask = 0;
	let tasksToDo = 0;

	tasks.map((task) => {
		if (task.isDone) {
			doneTask++;
		} else {
			tasksToDo++;
		}
	});

	return (
		<div className="tasksList">
			<h3>What you have to do today?</h3>
			<AddTaskForm onAdd={handleAddTask} />
			<TaskList
				tasks={tasks}
				onDelete={handleDeleteTask}
				onEdit={handleEditTask}
				onChange={handleCheckTask}
			/>
			<div className="taskSummary">
				<TaskSummary count={tasksToDo}>Tasks to do</TaskSummary>
				<TaskSummary count={doneTask}>Done tasks</TaskSummary>
			</div>
		</div>
	);
}
export default App;
