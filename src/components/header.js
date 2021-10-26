import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import account from "../assets/img/account.svg";
import cart from "../assets/img/cart.svg";

export default function Header(props) {
	return (
			<header>
				<nav className="navbar">
					<ul className="navbar__list">
						<li className="navbar__list__logo">
						<Link to={"/"} className="nav-link">
							<img src={logo} alt="" />
							</Link>
						</li>
						<li>
							<Link to={"/"} className="nav-link">
								Acceuil
							</Link>
						</li>
						{/* Ici tout les catalogues pointent vers produits, il faut 
						faire en sorte que la page n'affiche que les produits de la 
						categorie en question */}
						<li>
							<Link to={"/products"} className="nav-link">
								Ordinateurs
							</Link>
						</li>
						<li>
							<Link to={"/products"} className="nav-link">
								Configtonpc
							</Link>
						</li>
						<li>
							<Link to={"/products"} className="nav-link">
								Composants
							</Link>
						</li>
						<li>
							<Link to={"/config"} className="nav-link">
								Peripheriques
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
			</header>
	);
}
