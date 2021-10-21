import React from "react";
import ProductList from "../components/strapi-link";
import FiltersProductList from "../components/filters";

export default function Products() {
	return (
		<div>
			<h2>Produits</h2>
			<FiltersProductList />
			<ProductList />
		</div>
	);
}
