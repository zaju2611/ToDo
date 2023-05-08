function DayButton({ children, onChangeDay }) {
	return (
		<button className="dayButton" onClick={onChangeDay}>
			<span>{children}</span>
			<i></i>
		</button>
	);
}
export default DayButton;
