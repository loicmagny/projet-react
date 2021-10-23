// App.js

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Products from "./pages/products.js";
import Services from "./pages/services.js";
import Config from "./pages/config.js";
import SoloProd from "./pages/prodCards.js";
import SignIn from "./pages/signin.js";
import SignUp from "./pages/signup.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

export default function App(props) {
	return (
		<body>
			<Header />
					<main>
			<Router>
						<Route path="/" exact component={Home} />
						<Route path="/products" exact component={Products} />
						<Route path="/services" exact component={Services} />
						<Route path="/signin" exact component={SignIn} />
						<Route path="/signup" exact component={SignUp} />
						<Route path="/config" exact component={Config} />
						<Route path="/about" exact component={About} />
						<Route path="/contact" exact component={Contact} />
						<Route
							path="/products/:slug"
							exact
							{...props}
							component={SoloProd}
						/>
			</Router>
					</main>
			<Footer />
		</body>
	);
}
