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
import logo from "../assets/img/logo.svg";
import account from "../assets/img/account.svg";
import cart from "../assets/img/cart.svg";

export default function Header(props) {
	return (
		<Router>
			<header>
				<nav className="navbar">
					<ul className="navbar__list">
						<li className="navbar__list__logo">
							<img src={logo} alt="" />
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
					</ul>
					<ul className="navbar__list">
						<li>
							<Link to={"/cart"} className="nav__link">
								<img src={cart} alt="" className="navbar__list__logo__second"/>
							</Link>
						</li>
						<li>
							<Link to={"/signin"} className="nav__link">
								<img src={account} alt="" className="navbar__list__logo__second"/>
							</Link>
						</li>
					</ul>
				</nav>
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
			</header>
		</Router>
	);
}
