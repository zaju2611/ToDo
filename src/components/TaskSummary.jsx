function TaskSummary({ children, count }) {
	return (
		<div className="taskSummaryItem">
			<h3 className="taskSummaryHeader">{children}</h3>
			<p className="taskSummaryCount">{count}</p>
		</div>
	);
}

export default TaskSummary;
