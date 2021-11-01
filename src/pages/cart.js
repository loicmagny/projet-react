import React, { Component, useEffect, useState } from "react";
import cartsAPI from "../services/cartsAPI";
import loadingimg from "../assets/img/loading.svg";
import { url } from "../functions/globals";
import deletebutton from "../assets/img/trash.svg"


export default function Cart() {
	const [items, setItems] = useState();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (isLoaded === false) {
			try {
				cartsAPI.getCart(localStorage.getItem('userId'))
				.then(data => {
					setItems(data);
				})
				.finally(() => setIsLoaded(true));
			}
			catch(error) {
				console.log(error)
			}
		}
		
		
		
	});

	const refreshDecrement = (id, quantity) => {
		cartsAPI.decrement(id, quantity);
		setIsLoaded(false);
	}

	const refreshIncrement = (id, quantity) => {
		cartsAPI.increment(id, quantity);
		setIsLoaded(false);
	}

	const refreshRemove = (id) => {
		try {
			cartsAPI.remove(id);
		} catch(e) {
			console.log(e);
		}
		setIsLoaded(false);
	}

	if(isLoaded) {
		let total = 0;
		return items ? (
			<div className="cartpage">
				<table className="cart">
					<thead>
						<tr className="cart__names">
							<th colSpan="1"></th>
							<th colSpan="2.6">Description</th>
							<th colSpan="1.2">Prix</th>
							<th colSpan="1">Quantité</th>
							<th colSpan="1.2">Total</th>
							<th colSpan="1"></th>
						</tr>
					</thead>
					{items.map((item) => {
						total = total + (item.quantity * item.product.price)
						return <tbody>
							<tr className="cart__products">
								<td colSpan="1" className="cart__products__img">
									<img src={`${url}${item.product.image[0].url}`}></img>
								</td>
								<td colSpan="2.6">
									<div className="cart__products__item">
										<p className="cart__products__item__name">{item.product.name}</p>
										<p className="cart__products__item__desc">{item.product.description}</p>
									</div>
								</td>
								<td colSpan="1.2" className="cart__products__price"><span className="value">{item.product.price}</span> €</td>
								<td colSpan="1" className="cart__products__quantity">
									<button onClick={() => refreshDecrement(item.id, item.quantity)} className="cart__products__quantity__button">-</button>
									<span className="cart__products__quantity__value">{item.quantity}</span>
									<button onClick={() => refreshIncrement(item.id, item.quantity)} className="cart__products__quantity__button">+</button>
								</td>
								<td colSpan="1.2" className="cart__products__total">{(item.quantity * item.product.price).toFixed(2)} €</td>
								<td colSpan="1" className="cart__products__delete"><img onClick={() => refreshRemove(item.id)} src={deletebutton} alt="" /></td>
							</tr>
						</tbody>
					})
					}
				</table>
				<div className="commander">
					<h3>Total TTC</h3>
					<p>{total.toFixed(2)} €</p>
					<button>Passer la commande</button>
				</div>
			</div>
		) : (
			<div>Votre panier est vide</div>
		)
	} else {
		return (
			<img src={loadingimg} alt="" className="loading" />
		)
	}
}
