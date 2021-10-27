import React, { Component, useEffect, useState } from "react";
import cartsAPI from "../services/cartsAPI";
import loadingimg from "../assets/img/loading.svg";
import { url } from "../functions/globals";



export default function Cart() {
	const [items, setItems] = useState();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		cartsAPI.getCart(localStorage.getItem('userId'))
		.then(data => {
			setItems(data);
		})
		.finally(() => setIsLoaded(true));
	}, []);

	return isLoaded ? (
		<div>
			<div>
				<p>Panier</p>
			</div>
			{items.map((item) => {	
					return <div><p className="cart__item__name">{item.product.name}</p><p className="cart__item__price">{item.product.price}</p><p className="cart__item__quantity">{item.quantity}</p><p className="cart__item__desc">{item.product.description}</p><img src={`${url}${item.product.image[0].url}`}></img></div>
				}) 
			}	
		</div>
	) : (
		<img src={loadingimg} alt="" className="loading"/>
	)
}
