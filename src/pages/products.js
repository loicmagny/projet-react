import React from "react";
import ProductList from "../components/strapi-link";
import FiltersProductList from "../components/filters";

// axios.get(${url}?Categories=${laptop}&Colors=${color})

export default function Products() {
	return (
		<div className="catalogue">
			<h2>Produits :</h2>
			<div className="catalogue__content">
			<FiltersProductList />
			<ProductList />
			</div>
		</div>
	);
}
