import React, {useState, useEffect} from "react";
import GetCurrentDate from "../functions/getCurrentDate";
import usersAPI from "../services/usersAPI";
import { useHistory } from "react-router";

export default function SignUp() {

	const [account, setAccount] = useState('');	
	const history = useHistory();

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log('submit');
		try {
			usersAPI.register(account); 
			history.push('./pages/home');
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
		<div class="signin">
			<h2>S'inscrire</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label for="firstName">Prénom: </label>
					<input class="signin__input" onChange={handleChange} type="text" name="username" id="first_name" required />
				</div>
				<div>
					<label for="lastName">Nom: </label>
					<input onChange={handleChange} type="text" name="lastname" id="last_name" required />
				</div>
				<div>
					<label for="email">Email: </label>
					<input onChange={handleChange} type="email" name="email" id="email" required />
				</div>
				<div>
					<label for="password">Mot de passe: </label>
					<input onChange={handleChange} type="password" name="password" id="password" required />
				</div>
				<label for="birthdate">Birthdate :</label>
				<input
					onChange={handleChange}
					type="date"
					id="start"
					name="birthdate"
					value={`${GetCurrentDate()}`}
					// min="2018-01-01"
					// max="2018-12-31"
				/>
				<button type="submit">S'inscrire</button>
			</form>
		</div>
	);
}
