import React, { useState, useEffect } from "react";
import ProdsCard from "./prodsCardsList.js";
import { getAxiosData } from "../functions/axiosCall.js";
import {urlProduct} from '../functions/globals'
import loadingimg from "../assets/img/loading.svg";

export default function ProductList() {
	const [loading, setLoading] = useState(true);
	const [prods, setProds] = useState([]);
	useEffect(() => {
		getAxiosData(`${urlProduct}`).then((resp) => {
			setProds(resp.data);
			
		}).finally(()=>{
			setLoading(false)
		})
	}, []);
	console.log(prods)
	return loading ? (
		<img src={loadingimg} alt="" className="loading"/>
	) : (
		<div className="contnair-list">
			<div className="productlist">
				{prods.map((prod) => {
					return <ProdsCard key={prod.id} prod={prod}  />;
				})}
			</div>
		</div>
	);
}
