import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {url, urlProduct, urlCart} from '../functions/globals';
import cartsAPI from "../services/cartsAPI";
import loadingimg from "../assets/img/loading.svg";
import returnimg from "../assets/img/return.svg";
import AddCartNotif from "../components/addCartNotif";


export default function SoloProd(props) {
	const [prod, setProd] = useState([]);
	const [loading, setLoading] = useState(true);
	const [quantity, setQuantity] = useState();
	const [count, setCount] = useState();
	const [openNotif, setOpenNotif]= useState(false);
	const [swapped, Swap] = useState(false);
    const [render, Rendering] = useState(true);


	function SwapImg(i, e, obj) {
        let temp = prod.image[i];
        prod.image[i] = prod.image[0];
        prod.image[0] = temp;
        temp = 0;
        Rendering(false);
        return true;
    }

	const AddCart = async () => {
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
					setCount(count+1);
				}
				catch(error) {
					console.log(error);
				}
			}
			else if (data) {
				cartsAPI.increment(data[0].id, data[0].quantity);	
				setCount(count+1);
			}
		}) 	
	} 

	const RemoveCart = async () => {
		cartsAPI.checkProduct(localStorage.getItem('userId'), prod.id).then(data => {
			if (!data) {
				return;
			}
			else if (data) {
				cartsAPI.decrement(data[0].id, data[0].quantity);	
				if(count > 0) {
					setCount(count-1);
				}
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

	useEffect(() => {
		axios
		.get(`${urlCart}?user_id=${localStorage.getItem('userId')}&product=${prod.id}`)
		.then((res) => {
			setQuantity(res.data[0].quantity);
		})
		.catch((err) => {
			console.log(err.message);
		});
	});

	useEffect(() => {
		if(quantity) {
			setCount(quantity);
		}
		else {
			setCount(0);
		}
	}, [quantity]);

	function handleNotif() {
		setOpenNotif(true)
		closeNotif();
	} 
	function closeNotif(){
		setTimeout(()=> {setOpenNotif(false)},3000);
	}
	
	if (swapped) {
        Rendering(true);
        Swap(false);
    }

	return loading ? (
		<img src={loadingimg} alt="" className="loading"/>
	) : (
		<div className="singleproduct">
			<div className="singleproduct__return">
				<Link to="/"><img src={returnimg} alt="" className="return" /></Link>
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
					<p className="singleproduct__content__desc__items__price"> {prod.price} €</p>
					<div className="singleproduct__content__desc__items__quantity"><button onClick={RemoveCart}>-</button><p>{count ? count : 0}</p><button onClick={AddCart}>+</button></div>
					<button onClick={()=>{AddCart(); handleNotif()} } className="addcartactiver">Ajouter au panier</button>
					<AddCartNotif notification={openNotif} setnotification={setOpenNotif}/>
				</div>		
			</div>
		</div>
	);
}

