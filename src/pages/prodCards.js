import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {url, urlProduct} from '../functions/globals';
import cartsAPI from "../services/cartsAPI";


export default function SoloProd(props) {
	const [prod, setProd] = useState([]);
	const [loading, setLoading] = useState(true);
	const [quantity, setQuantity] = useState();

	const addCart = async () => {
		cartsAPI.checkProduct(localStorage.getItem('userId'), prod.id).then(data => {
			if (!data) {
				const product = {	
				"user_id": {
					"id": localStorage.getItem('userId')
				},
				"quantity": 1,
				"product": {
					"id" : prod.id
				}
				}
				try {
					cartsAPI.add(product);
				}
				catch(error) {
					console.log(error);
				}
			}
			else if (data) {
				cartsAPI.increment(data[0].id, data[0].quantity);
			}
		}) 		
	} 

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
				<p>Quantité : {quantity}</p>
				<button onClick={addCart}>Ajouter au panier</button>
			</div>
		</div>
	);
}
