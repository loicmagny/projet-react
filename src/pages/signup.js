import React from "react";
import GetCurrentDate from "../functions/getCurrentDate";

export default function SignUp() {
	// const [firstName, setFirstName] = useState('');
	// const [firstName, setFirstName] = useState('');
	// const [firstName, setFirstName] = useState('');
	// const [firstName, setFirstName] = useState('');
	// const [firstName, setFirstName] = useState('');
	// const [firstName, setFirstName] = useState('');

	return (
		<div className="signup">

			<form className="signup__form" action="" method="POST">
				<div className="signup__form__identifiants">
					<h1 className="signup__form__identifiants__title">VOS IDENTIFIANTS :</h1>
					<div>
						<label for="email"></label>
						<input className="signup__form__identifiants__input" type="email" name="email" id="email" placeholder="Nom d'utilisateur" required />
					</div>
					<div>
						<label for="password"></label>
						<input className="signup__form__identifiants__input" type="password" name="password" id="password" placeholder="Email" required />
					</div>
					<div>
						<label for="password"></label>
						<input className="signup__form__identifiants__input" type="password" name="password" id="password" placeholder="Mot de passe" required />
					</div>
				</div>
				<div className="signup__form__perso">
					<h1 className="signin__title">VOS INFORMATIONS PERSONNELLES :</h1>
					<div>
						<label for="firstName"></label>
						<input className="signup__form__perso__input" type="firstName" name="firstName" id="firstName" placeholder="Nom" required />
					</div>
					<div>
						<label for="lastName"></label>
						<input className="signup__form__perso__input" type="lastName" name="lastName" id="lastName" placeholder="Prenom" required />
					</div>
					<div>
					<label for="birthdate"></label>
					<input
						className="signup__form__perso__input"
						type="date"
						id="start"
						name="birthdate"
						value={`${GetCurrentDate()}`}
						min="2018-01-01"
						max="2018-12-31"

					/>
					</div>
					<div>
					<label for="adresse"></label>
					<input className="signup__form__perso__input" type="text" id="adresse" type="adress" name="address" placeholder="Adresse" />
					</div>
				</div>
				<div>
				<button className="signup__form__submit">S'inscrire</button>
				</div>
			</form>
		</div>
	);
}
