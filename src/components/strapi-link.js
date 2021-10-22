import React, { useState, useEffect } from "react";

import ProdsCard from "./prodsCardsList.js";
import { getAxiosData } from "../functions/axiosCall.js";
import {urlProduct} from '../functions/globals'

export default function ProductList() {
	const [loading, setLoading] = useState(true);
	const [prods, setProds] = useState([]);
	useEffect(() => {
		getAxiosData(`${urlProduct}`).then((resp) => {
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
