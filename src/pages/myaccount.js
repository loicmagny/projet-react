import React, { useState, useEffect } from "react";
import { getAxiosData } from "../functions/axiosCall.js";
import loadingimg from "../assets/img/loading.svg";
import { urlAccount } from "../functions/globals";
import axios from "axios";


function MyAccount() {
	const [loading, setLoading] = useState(true);
	const [account, setAccount] = useState([]);
	
    useEffect(() => {
        if (loading == true) {
            axios({
                method: 'get',
                url: `${urlAccount}/${localStorage.getItem('userId')}`,
                headers: {
                  Authorization: 'Bearer ' + localStorage.getItem('userToken')
                }
            }).then(res => {
                setAccount(res.data)
            })
        }
        setLoading(false);
	}, [])

    return loading ? (
		<img src={loadingimg} alt="" className="loading"/>
	) : (
        <div className="myaccount">
            <h2>Votre profil</h2>
            <div className="myaccount__main">
            <div className="myaccount__main__title">
                <p>Prenom :</p>
                <p>Nom :</p>
                <p>Date de naissance :</p>
                <p>Email :</p>
                <p>Crée le :</p>
            </div>
            <div className="myaccount__main__content">
                <p>{account.username}</p>
                <p>{account.lastname}</p>
                <p>{account.birthdate}</p>
                <p>{account.email}</p>
                <p>{account.created_at}</p>
            </div>
            </div>
            <p>Disconnect</p>
        </div>
    )
    }

export default MyAccount;