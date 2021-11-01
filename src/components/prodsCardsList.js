import React from "react";
import { Link } from "react-router-dom";
import { url } from "../functions/globals";

export default function ProdsCard({ prod }) {
	return (
		<div className="card">
			<img
				src={`${url}${prod.image[0].url}`}
				alt={prod.image.alternativeText}
				className="card__img"
			/>
			<div className="card__info">
				<p className="card__info__text__title">{prod.name}</p>
				<div className="card__info__text">
					<p className="card__info__text__price">{prod.price}€</p>
					<Link
						to={`products/${prod.id}`}
						key={prod.id}
						className="card__info__link"
					>
						<button className="card__info__link__button">Voir plus</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
