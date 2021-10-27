import React, { Component, useEffect, useState } from "react";
import cartsAPI from "../services/cartsAPI";
import loadingimg from "../assets/img/loading.svg";
import { url } from "../functions/globals";
import deletebutton from "../assets/img/trash.svg"


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
		<div >
			<h2>Panier :</h2>
			<table className="cart">
				<thead>
					<tr className="cart__names">
						<th colspan="1"></th>
						<th colspan="2.6">Désgnation</th>
						<th colspan="1.2">Prix</th>
						<th colspan="1">Quantité</th>
						<th colspan="1.2">Total</th>
						<th colspan="1">Trash</th>
					</tr>
				</thead>


				{items.map((item) => {
					return <tbody>
						<tr  className="cart__products">
							<td colspan="1" className="cart__products__img">
								<img src={`${url}${item.product.image[0].url}`}></img>
							</td>
							<td colspan="2.6">
								<div className="cart__products__item">
									<p className="cart__products__item__name">{item.product.name}</p>
									<p className="cart__products__item__desc">{item.product.description}</p>
								</div>
							</td>
							<td colspan="1.2" className="cart__products__price">{item.product.price} €</td>
							<td colspan="1" className="cart__products__quantity">{item.quantity}</td>
							<td colspan="1.2" className="cart__products__total">{item.quantity *item.product.price} €</td>
							<td colspan="1" className="cart__products__delete"><img src={deletebutton} alt="" /></td>
						</tr>
					</tbody>

				})
				}
			</table>
		</div>
	) : (
		<img src={loadingimg} alt="" className="loading" />
	)
}
