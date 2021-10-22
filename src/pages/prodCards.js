import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

export default function SoloProd(props) {
	const [prod, setProd] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`https://5f72-176-162-49-41.ngrok.io/products/${props.match.params.slug}`)
			.then((res) => {
				setProd(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, [props.match.params.slug]);

	// // const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

	// module.exports = {
	// /**
	//  * Create a record.
	//  *
	//  * @return {Object}
	//  */

	// async create(ctx) {
	// 	let entity;
	// 	if (ctx.is('multipart')) {
	// 	const { data, files } = parseMultipartData(ctx);
	// 	entity = await strapi.services.restaurant.create(data, { files });
	// 	} else {
	// 	entity = await strapi.services.restaurant.create(ctx.request.body);
	// 	}
	// 	return sanitizeEntity(entity, { model: strapi.models.restaurant });
	// },
	// };

	return loading ? (
		<p>Chargement en cours</p>
	) : (
		<div>
			<nav>
				<Link to="/products">Retour</Link>
			</nav>
			<div>
				<img
					src={`https://5f72-176-162-49-41.ngrok.io/products${prod.image.url}`}
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
