import axios from "axios";

export async function getAxiosData(url) {
	return await axios
		.get(url)
		.then((res) => {
			console.log(res);
			return res;
		})
		.catch((err) => {
			alert(err.message);
		});
}
