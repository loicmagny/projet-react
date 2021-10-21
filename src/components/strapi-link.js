import React, { useState, useEffect } from "react";

import ProdsCard from "./prodsCardsList.js";
import { getAxiosData } from "../functions/axiosCall.js";

export default function ProductList() {
	const [loading, setLoading] = useState(true);
	const [prods, setProds] = useState([]);
	useEffect(() => {
		getAxiosData("https://976e-93-5-98-154.ngrok.io/products").then((resp) => {
			setProds(resp.data);
			setLoading(false);
		});
	}, []);
	console.log(prods)
	return loading ? (
		<p>Chargement en cours</p>
	) : (
		<div>
			<div>
				{prods.map((prod) => {
					return <ProdsCard key={prod.id} prod={prod} />;
				})}
			</div>
		</div>
	);
}
