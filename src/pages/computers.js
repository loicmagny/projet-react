// import React, { useState, useEffect } from "react";
// import ProdsCard from "../components/prodsCardsList.js";
// import { getAxiosData } from "../functions/axiosCall.js";
// import FiltersProductList from "../components/filters";
// import { urlProduct } from "../functions/globals";
// import loadingimg from "../assets/img/loading.svg";

// export default function Computers() {
// 	const [loading, setLoading] = useState(true);
// 	const [prods, setProds] = useState([]);
// 	console.log(this.props.location.search);
// 	useEffect(() => {
// 		getAxiosData(`${urlProduct + "?category=1"}`)
// 			.then((resp) => {
// 				setProds(resp.data);
// 			})
// 			.finally(() => {
// 				setLoading(false);
// 			});
// 	}, []);
// 	return loading ? (
// 		<img src={loadingimg} alt="" className="loading" />
// 	) : (
// 		<div className="catalogue">
// 			<div className="catalogue__content">
// 				<FiltersProductList />
// 				<div className="productlist">
// 					{prods.map((prod) => {
// 						return <ProdsCard key={prod.id} prod={prod} />;
// 					})}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
