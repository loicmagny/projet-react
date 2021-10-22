import React from "react";
import { Link } from "react-router-dom";

export default function ProdsCard({ prod }) {
	return (
		<div>
			<Link to={`/products/${prod.slug}`} key={prod.slug}>
				<img
					src={`https://5f72-176-162-49-41.ngrok.io${prod.image.url}`}
					alt={prod.image.alternativeText}
				/>
				<p>{prod.title}</p>
			</Link>
			<p>{prod.price}</p>
			<p>{prod.description}</p>
			<button>Acheter</button>
			{/* <p>{prod.origin.title}</p> */}
		</div>
	);
}
