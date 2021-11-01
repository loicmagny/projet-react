import { useEffect, useState } from "react";
import checkbox from "../assets/img/cartblank.svg"

export default function AddCartNotif({notification, setnotification,notifmessage}) {

	 return notification ?  (
		<div className={`addcartnotif animate__animated animate__bounceInRight`} onClick={()=> {setnotification(false)}}  >
            <img src={checkbox} alt=""  className="addcartnotif__img" />
            <p className="addcartnotif__notif">{notifmessage}</p>
        </div>
	) : null;
}