import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import account from "../assets/img/account.svg";
import cart from "../assets/img/cart.svg";

function refreshPage() {
	window.location.reload();
}

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
							Accueil
						</Link>
					</li>
					{/* Ici tout les catalogues pointent vers produits, il faut 
						faire en sorte que la page n'affiche que les produits de la 
						categorie en question */}
					<li className="navbar__list__deroulant_declencheur">
						<span>Catalogue</span>
						<ul className="navbar__list__deroulant">
							<li className="navbar__list__deroulant__item">
								<Link to={"/products?category=1"} className="nav-link">
									<p onClick="refreshPage()">Ordinateurs</p>
								</Link>
							</li>
							<li className="navbar__list__deroulant__item">
								<Link to={"/products?category=2"} className="nav-link">
									<p onClick="refreshPage()">Composant</p>
								</Link>
							</li>
							<li className="navbar__list__deroulant__item">
								<Link to={"/products?category=3"} className="nav-link">
									<p onClick="refreshPage()">Peripheriques</p>
								</Link>
							</li>
						</ul>
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
							<img src={cart} alt="" className="navbar__list__logo__second" />
						</Link>
					</li>
					{localStorage.getItem('userName') == undefined ? 
					<li>
						<Link to={"/signin"} className="nav__link">
							<img
								src={account}
								alt=""
								className="navbar__list__logo__second"
							/>
						</Link>
					</li>
						: 
					<li className="align">
					<Link to={"/myaccount"} className="nav__link hover">
						
						<p>Bonjour {localStorage.getItem('userName')}</p>
					</Link>
					</li>
						}
				</ul>
			</nav>
		</header>
	);
}
