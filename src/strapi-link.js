import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

export default function ProductList() {
	const [prods, setProds] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:1337/products/")
			.then((res) => {
				setProds(res.data);
			})
			.catch((err) => {
				alert(err.message);
			});
	}, []);
	console.log("Products:", prods);
	return (
		<div>
			<nav>
				<Link to="/">Home</Link>
			</nav>
			<div>
				{prods.map((prod) => {
					return <prodsCard key={prod.id} prods={prod} />;
				})}
			</div>
		</div>
	);
}

