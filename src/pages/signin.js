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
			history.push('/');
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
			<h1 className="signin__title">DÉJÀ CLIENT ?</h1>
			<form onSubmit={handleSubmit} className="signin__form" action="" method="POST">
				<div>
					<label for="email"></label>
					<input
						onChange={handleChange}
						className="signin__form__input"
						type="email"
						name="identifier"
						id="email"
						placeholder="Votre email"
						required />
				</div>
				<div>
					<label for="password"></label>
					<input
						onChange={handleChange}
						className="signin__form__input"
						type="password"
						name="password"
						id="password"
						placeholder="Votre mot de passe"
						required
					/>
				</div>
				<p className="signin__forgot">Vous avez oublié votre mot de passe ?</p>
				<button className="signin__submit">CONNEXION</button>

			</form>
			<div className="signin__newclient">
				<h1 className="signin__newclient__title">NOUVEAU CLIENT ?</h1>
				<Link to={"/signup"} className="signin__newclient__createaccount">
					CRÉE UN COMPTE
				</Link>
			</div>
		</div>
	);
}
