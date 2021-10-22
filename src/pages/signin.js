import React from "react";

export default function SignIn() {
	return (
		<div className="signin">
			<h2 className="signin__title">DEJA CLIENT ?</h2>
			<form className="signin__form" action="" method="POST">
				<input
					className="signin__form__input"
					type="email"
					name="email"
					id="email"
					placeholder="Votre email"
					required
				/>

				<input
					className="signin__form__input"
					type="password"
					name="password"
					id="password"
					placeholder="Votre mot de passe"
					required
				/>
				<p className="signin__forgot">Vous avez oublié votre mot de passe ?</p>
				<button className="signin__submit">S'inscrire</button>
			</form>
		</div>
	);
}
