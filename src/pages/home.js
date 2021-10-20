import React, { Component } from "react";

import ProductList from "../strapi-link";

class Home extends Component {
	render() {
		return (
			<div>
				<h2>Accueil</h2>
				<ProductList />
			</div>
		);
	}
}

export default Home;
