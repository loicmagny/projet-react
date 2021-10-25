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
		<div className="singleproduct">
			<div className="singleproduct__return">
				<Link to="/products">Retour</Link>
			</div>
			<div className="singleproduct__content">
				<div className="singleproduct__content__images">
					<div className="singleproduct__content__images__main">
						<img src={`${url}${prod.image.url}`} alt={prod.alternativeText}/>
					</div>
					<div className="singleproduct__content__images__second">
						<img src={`${url}${prod.image.url}`} alt={prod.alternativeText}/>
						<img src={`${url}${prod.image.url}`} alt={prod.alternativeText}/>
						<img src={`${url}${prod.image.url}`} alt={prod.alternativeText}/>
					</div>
				</div>
				<div className="singleproduct__content__desc">
					<h3>{prod.title}</h3>
					<p>Species: {prod.description}</p>
					<p className="singleproduct__content__desc__items"> {prod.price} €</p>
					<p className="singleproduct__content__desc__items">Quantité : 
						<select name="quantity" id="quantity" className="singleproduct__content__desc__items__select">
							<option value="1">1</option>
							{Array.from(Array(20).keys()).map(index => <option value={index+2}>{index+2}</option>)}
							
						</select>
					</p>
					<button>Ajouter au panier</button>
				</div>		
			</div>
		</div>
	);
}
