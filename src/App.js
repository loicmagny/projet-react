// App.js

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import SignUp from "./pages/signup.js";
import SoloProd from "./pages/prodCards.js";
import SignIn from "./pages/signin.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Cart from "./pages/cart.js";
import Products from "./pages/products.js";
import MyAccount from "./pages/myaccount.js"

export default function App(props) {
	return (
		<>
			<Router>
			<Header />
					<main>
						<Route path="/" exact component={Home} />
						<Route path="/products" exact component={Products} />
						<Route path="/products?category=1" exact component={Products} />
						<Route path="/products?category=2" exact component={Products} />
						<Route path="/products?category=3" exact component={Products} />
						<Route path="/signin" exact component={SignIn} />
						<Route path="/signup" exact component={SignUp} />
						<Route path="/about" exact component={About} />
						<Route path="/contact" exact component={Contact} />
						<Route path="/cart" exact component={Cart} />
						<Route path="/myaccount" exact component={MyAccount} />
						<Route
							path="/products/:slug"
							exact
							{...props}
							component={SoloProd}
						/>
					</main>
			<Footer />
			</Router>
		</>
	);
}
