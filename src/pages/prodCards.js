import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import {url, urlProduct} from '../functions/globals'


export default function SoloProd(props) {
	const [prod, setProd] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`${urlProduct}/${props.match.params.slug}`)
			.then((res) => {
				setProd(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, [props.match.params.slug]);

	return loading ? (
		<p>Chargement en cours</p>
	) : (
		<div>
			<nav>
				<Link to="/products">Retour</Link>
			</nav>
			<div>
				<img
					src={`${url}${prod.image.url}`}
					alt={prod.alternativeText}
				/>
				<h3>{prod.title}</h3>
				<p>Status: {prod.price}</p>
				<p>Species: {prod.description}</p>
				<p>Quantité : 1</p>
				<button>Ajouter au panier</button>
			</div>
		</div>
	);
}
