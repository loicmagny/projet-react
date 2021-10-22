import React from "react";
import { Link } from "react-router-dom";
import { url } from "../functions/globals";

export default function ProdsCard({ prod }) {
	return (
		<div className="card">
			<img 
				src={`${url}${prod.image.url}`} 
				alt={prod.image.alternativeText} 
				className="card__img"/>
			<div className="card__info">
				<div className="card__info__text">
					<p className="card__info__text__title">{prod.title}</p>
					<p className="card__info__text__price">{prod.price}</p>
				</div>
				<Link to={`/products/${prod.slug}`} key={prod.slug}>
					<button className="card__info__button">Acheter</button>
				</Link>
			</div>
		</div>
	);
}
