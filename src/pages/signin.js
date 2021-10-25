import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import usersAPI from "../services/usersAPI";

export default function SignIn() {

	const [account, setAccount] = useState('');	
	const history = useHistory();

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log('submit');
		try {
			usersAPI.login(account); 
			history.push('./home');
		}
		catch(error) {
			console.log(error);
		}
	} 

	const handleChange = ({currentTarget}) => {
		const { name, value } = currentTarget;
		setAccount({
			...account,
			[name]: value
		})
		console.log(account);
	}

	return (
		<div className="signin">
			<h2 className="signin__title">DEJA CLIENT ?</h2>
			<form onSubmit={handleSubmit} className="signin__form" action="" method="POST">
				<input
					onChange={handleChange}
					className="signin__form__input"
					type="email"
					name="identifier"
					id="email"
					placeholder="Votre email"
					required/>

				<input
					onChange={handleChange}
					className="signin__form__input"
					type="password"
					name="password"
					id="password"
					placeholder="Votre mot de passe"
					required
				/>
				<button type="submit">Connexion</button>
				<p className="signin__forgot">Vous avez oublié votre mot de passe ?</p>
				<Link to={"/signup"} class="signin__submit">S'inscrire</Link>
			</form>
		</div>
	);
}
