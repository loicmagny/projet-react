import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { url, urlProduct, urlCart } from "../functions/globals";
import cartsAPI from "../services/cartsAPI";
import loadingimg from "../assets/img/loading.svg";
import returnimg from "../assets/img/return.svg";
import AddCartNotif from "../components/addCartNotif";

export default function SoloProd(props) {
	const [prod, setProd] = useState([]);
	const [loading, setLoading] = useState(true);
	const [openNotif, setOpenNotif] = useState(false);
	const [swapped, Swap] = useState(false);
	const [render, Rendering] = useState(true);
	const [count, setCount] = useState(1);

	function SwapImg(i) {
		let temp = prod.image[i];
		prod.image[i] = prod.image[0];
		prod.image[0] = temp;
		temp = 0;
		Rendering(false);
		return true;
	}

	const incrementCount = () => {
		setCount(count + 1);
	};

	const decrementCount = () => {
		if (count != 0) {
			setCount(count - 1);
		}
	};

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

	useEffect(() => {
		setCount(1);
	}, [openNotif]);

	function handleNotif() {
		setOpenNotif(true);
		closeNotif();
	}
	function closeNotif() {
		setTimeout(() => {
			setOpenNotif(false);
		}, 3000);
	}

	if (swapped) {
		Swap(false);
	}

	return loading ? (
		<img src={loadingimg} alt="" className="loading" />
	) : (
		<div className="singleproduct">
			<div className="singleproduct__return">
				<Link to="/">
					<img src={returnimg} alt="" className="return" />
				</Link>
			</div>
			<div className="singleproduct__content">
				<div className="singleproduct__content__images">
					<div className="singleproduct__content__images__main">
						<img
							src={`${url}${prod.image[0].url}`}
							alt={prod.alternativeText}
						/>
					</div>
					<div className="singleproduct__content__images__second">
						{prod.image.slice(1).map((obj, i) => {
							return (
								<img
									src={`${url}${obj.url}`}
									alt={obj.alternativeText}
									onClick={() => Swap(SwapImg.bind(obj, i + 1))}
								/>
							);
						})}
					</div>
				</div>
				<div className="singleproduct__content__desc">
					<h3>{prod.name}</h3>
					<p>{prod.description}</p>
					<p className="singleproduct__content__desc__items__price">
						{" "}
						{prod.price} €
					</p>
					<div className="singleproduct__content__desc__items__quantity">
						<button onClick={decrementCount}>-</button>
						<p>{count}</p>
						<button onClick={incrementCount}>+</button>
					</div>
					<button
						onClick={() => {
							try {
								cartsAPI.addCart(prod, count);
							} catch (e) {
								console.log(e);
							} finally {
								handleNotif();
							}
						}}
						className="addcartactiver"
					>
						Ajouter au panier
					</button>
					<AddCartNotif
						notification={openNotif}
						setnotification={setOpenNotif}
						notifmessage="Votre article a bien été ajouté au panier"
					/>
				</div>
			</div>
		</div>
	);
}
