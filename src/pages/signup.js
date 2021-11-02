import React, { useState } from "react";
import usersAPI from "../services/usersAPI";
import { useHistory } from "react-router";

export default function SignUp() {
	const [account, setAccount] = useState("");
	const history = useHistory();

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(account);
		console.log("submit");
		try {
			usersAPI.register(account);
			history.push("/");
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = ({ currentTarget }) => {
		const { name, value } = currentTarget;
		setAccount({
			...account,
			[name]: value,
		});
		console.log(account);
	};

	return (
		<div className="signup">
			<form onSubmit={handleSubmit} className="signup__form" action="" method="POST">
				<div className="signup__form__identifiants">
					<h1 className="signup__form__identifiants__title">
						VOS IDENTIFIANTS :
					</h1>
					<div>
						<label for="username"></label>
						<input
							onChange={handleChange}
							className="signup__form__identifiants__input"
							type="text"
							name="username"
							id="username"
							placeholder="Nom d'utilisateur"
							required
						/>
					</div>
					<div>
						<label for="email"></label>
						<input
							onChange={handleChange}
							className="signup__form__identifiants__input"
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							required
						/>
					</div>
					<div>
						<label for="password"></label>
						<input
							onChange={handleChange}
							className="signup__form__identifiants__input"
							type="password"
							name="password"
							id="password"
							placeholder="Mot de passe"
							required
						/>
					</div>
				</div>
				<div className="signup__form__perso">
					<h1 className="signin__title">VOS INFORMATIONS PERSONNELLES :</h1>
					<div>
						<label for="lastName"></label>
						<input
							onChange={handleChange}
							className="signup__form__perso__input"
							type="lastName"
							name="lastName"
							id="lastName"
							placeholder="Prenom"
							required
						/>
					</div>
					<div>
						<label for="birthdate"></label>
						<input
							onChange={handleChange}
							className="signup__form__perso__input"
							type="date"
							id="start"
							name="birthdate"
						/>
					</div>
				</div>
				<div>
					<button className="signup__form__submit" onClick={handleSubmit}>S'inscrire</button>
				</div>
			</form>
		</div>
	);
}
