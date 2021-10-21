import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/home.js";
import About from "../pages/about.js";
import Contact from "../pages/contact.js";
import Products from "../pages/products.js";
import Services from "../pages/services.js";
import Config from "../pages/config.js";
import SoloProd from "../pages/prodCards.js";
import SignIn from "../pages/signin.js";

export default function Header(props) {
	return (
		<Router>
			<div>
				<h2>Bienvenue</h2>
				<nav className="navbar">
					<ul className="navbar__list">
						<li className="navbar__list__logo">
							<img src="" alt="" />
						</li>
						<li>
							<Link to={"/"} className="nav-link">
								Accueil
							</Link>
						</li>
						<li>
							<Link to={"/products"} className="nav-link">
								Produits
							</Link>
						</li>
						<li>
							<Link to={"/services"} className="nav-link">
								Services
							</Link>
						</li>
						<li>
							<Link to={"/config"} className="nav-link">
								Config Ton PC
							</Link>
						</li>
						<li>
							<Link to={"/about"} className="nav-link">
								A Propos
							</Link>
						</li>
						<li>
							<Link to={"/signin"} className="nav-link">
								Inscription
							</Link>
						</li>
						<li>
							<Link to={"/cart"} className="nav-link">
								Panier
							</Link>
						</li>
					</ul>
				</nav>
				<hr />
				<Switch>
					<Route path="/" exact {...props} component={Home} />
					<Route path="/products" exact {...props} component={Products} />
					<Route path="/services" exact {...props} component={Services} />
					<Route path="/signin" exact {...props} component={SignIn} />
					<Route path="/config" exact {...props} component={Config} />
					<Route path="/about" exact {...props} component={About} />
					<Route path="/contact" exact {...props} component={Contact} />
					<Route path="/products/:slug" exact {...props} component={SoloProd} />
				</Switch>
			</div>
		</Router>
	);
}
