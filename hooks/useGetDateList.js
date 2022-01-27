import useHandleDate from "./useHandleDate";

export default function useGetDateList() {
	const GetDateList = (scheduleString) => {
		const { formatDatetime } = useHandleDate();
		const listSchedule = scheduleString.split(";");
		let listScheduleFormatted = [];
		for (var i = 0; i < listSchedule.length - 1; i++) {
			var oneSchedule = listSchedule[i].split(",");
			var dateStart = formatDatetime(oneSchedule[0]);
			var dateEnd = formatDatetime(oneSchedule[1]);
			var scheduleFormatted = `${dateStart.dayName},${dateStart.day} ${dateStart.month} ${dateStart.year} (${dateStart.hours}:${dateStart.minutes}${dateStart.period} - ${dateEnd.hours}:${dateEnd.minutes}${dateEnd.period})`;
			listScheduleFormatted.push(scheduleFormatted);
		}
		return listScheduleFormatted;
	};

	return { GetDateList };
}
