import DayButton from "./DayButton";

function SelectDay({ onSelectDay }) {
	return (
		<div className="selectDay">
			<DayButton onChangeDay={() => onSelectDay("Monday")}>Monday</DayButton>
			<DayButton onChangeDay={() => onSelectDay("Tuesday")}>Tuesday</DayButton>
			<DayButton onChangeDay={() => onSelectDay("Wednesday")}>
				Wednesday
			</DayButton>
			<DayButton onChangeDay={() => onSelectDay("Thursday")}>
				Thursday
			</DayButton>
			<DayButton onChangeDay={() => onSelectDay("Friday")}>Friday</DayButton>
			<DayButton onChangeDay={() => onSelectDay("Saturday")}>
				Saturday
			</DayButton>
			<DayButton onChangeDay={() => onSelectDay("Sunday")}>Sunday</DayButton>
		</div>
	);
}
export default SelectDay;
