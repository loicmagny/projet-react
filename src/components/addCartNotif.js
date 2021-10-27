import { useEffect, useState } from "react";
import checkbox from "../assets/img/checked.png"

export default function AddCartNotif({notification, setnotification}) {

	 return notification ?  (
		<div className={`addcartnotif animate__animated animate__bounceInRight`} onClick={()=> {setnotification(false)}}  >
            <img src={checkbox} alt=""  className="addcartnotif__img" />
            <p className="addcartnotif__notif">Votre article a été ajouté au panier</p>
        </div>
	) : null;
}