import React from "react";
import GetCurrentDate from "../functions/getCurrentDate";

export default function SignIn() {
	// const [firstName, setFirstName] = useState('');
	// const [firstName, setFirstName] = useState('');
	// const [firstName, setFirstName] = useState('');
	// const [firstName, setFirstName] = useState('');
	// const [firstName, setFirstName] = useState('');
	// const [firstName, setFirstName] = useState('');

	return (
		<div>
			<h2>S'inscrire</h2>
			<form action="" method="POST">
				<div>
					<label for="firstName">Nom : </label>
					<input type="firstName" name="firstName" id="firstName" required />
				</div>
				<div>
					<label for="lastName">Prénom: </label>
					<input type="lastName" name="lastName" id="lastName" required />
				</div>
				<div>
					<label for="email">Enter your email: </label>
					<input type="email" name="email" id="email" required />
				</div>
				<div>
					<label for="password">Enter your password: </label>
					<input type="password" name="password" id="password" required />
				</div>
				<label for="birthdate">Start date:</label>
				<input
					type="date"
					id="start"
					name="birthdate"
					value={`${GetCurrentDate()}`}
					min="2018-01-01"
					max="2018-12-31"
				/>
				<button>S'inscrire</button>
			</form>
		</div>
	);
}
