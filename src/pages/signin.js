import React from "react";

export default function SignIn() {
	return (
		<div>
			<h2>S'inscrire</h2>
			<form action="" method="POST">
				<div>
					<label for="email">Enter your email: </label>
					<input type="email" name="email" id="email" required />
				</div>
				<div>
					<label for="password">Enter your password: </label>
					<input type="password" name="password" id="password" required />
				</div>

				<button>S'inscrire</button>
			</form>
		</div>
	);
}
