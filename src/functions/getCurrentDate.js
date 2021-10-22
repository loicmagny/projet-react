export default function GetCurrentDate() {
	let today = new Date();
	return (
		today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
	);
}
