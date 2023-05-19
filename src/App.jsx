import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import TaskSummary from "./components/TaskSummary";
import SelectDay from "./components/SelectDay";

function App() {
	const [tasks, setTasks] = useState([]);
	const [selectedDay, setSelectedDay] = useState("Monday");

	const fetchTasks = async () => {
		try {
			const response = await axios.get(
				`http://localhost:3001/tasks?dayId=${selectedDay}`
			);
			setTasks(
				response.data
					.map((task) => {
						if (task.dayName === selectedDay) {
							return task;
						}
						return null;
					})
					.filter((task) => task !== null)
			);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchTasks();
	}, [selectedDay]);

	const handleSelectDay = (day) => {
		setSelectedDay(day);
	};

	const handleAddTask = async (content) => {
		const response = await axios.post("http://localhost:3001/tasks", {
			content,
			isDone: false,
			dayName: selectedDay,
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

	const handleEditTask = async (index, newTaskContent, isDone, dayName) => {
		const response = await axios.put(`http://localhost:3001/tasks/${index}`, {
			id: index,
			isDone: isDone,
			content: newTaskContent,
			dayName: dayName,
		});

		const updatedTasks = tasks.map((task) => {
			if (task.id === index) {
				return { ...task, ...response.data };
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	const handleCheckTask = async (id, content, isDone, dayName) => {
		await axios.put(`http://localhost:3001/tasks/${id}`, {
			id: id,
			isDone: isDone,
			content: content,
			dayName: dayName,
		});
		fetchTasks();
	};

	let doneTask = 0;
	let tasksToDo = 0;

	tasks.forEach((task) => {
		if (task.isDone) {
			doneTask++;
		} else {
			tasksToDo++;
		}
	});

	return (
		<div>
			<SelectDay onSelectDay={handleSelectDay} />

			<div className="tasksList">
				<h3>What you have to do on {selectedDay}?</h3>
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
		</div>
	);
}
export default App;
