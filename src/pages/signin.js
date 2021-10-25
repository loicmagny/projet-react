import React from "react";

export default function SignIn() {
	return (
		<div className="signin">
			<h1 className="signin__title">DÉJÀ CLIENT ?</h1>
			<form className="signin__form" action="" method="POST">
				<div>
					<label for="email"></label>
					<input
						className="signin__form__input"
						type="email"
						name="email"
						id="email"
						placeholder="Votre email"
						required />
				</div>
				<div>
					<label for="password"></label>
					<input
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
				<button className="signin__newclient__createaccount">CRÉE UN COMPTE</button>
			</div>
		</div>
	);
}
