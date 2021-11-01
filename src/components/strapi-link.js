import React, { useState, useEffect } from "react";
import ProdsCard from "./prodsCardsList.js";
import { getAxiosData } from "../functions/axiosCall.js";
import { urlProduct } from "../functions/globals";
import loadingimg from "../assets/img/loading.svg";

export default function ProductList() {
	const [loading, setLoading] = useState(true);
	const [prods, setProds] = useState([]);
	const queryParams = new URLSearchParams(window.location.search);
	const [category, setCategory] = useState(0);
	const [reload, setReload] = useState(true);
	// console.log(category);
	console.log(queryParams.get("category"));

	useEffect(() => {
		if (loading) {
			if (!queryParams.get("category")) {
				getAxiosData(`${urlProduct}`)
					.then((resp) => {
						setProds(resp.data);
					})
					.finally(() => {
						setLoading(false);
					});
			} else if (queryParams.get("category")) {
				setCategory(queryParams.get("category"));
				getAxiosData(`${urlProduct + "?category=" + category}`)
					.then((resp) => {
						setProds(resp.data);
					})
					.finally(() => {
						setLoading(false);
					});
			}
		}
	}, [category]);

	console.log(category);
	console.log(prods);
	return loading ? (
		<img src={loadingimg} alt="" className="loading" />
	) : (
		<div className="contnair-list">
			<div className="productlist">
				{prods.map((prod) => {
					return <ProdsCard key={prod.id} prod={prod} />;
				})}
			</div>
		</div>
	);
}
