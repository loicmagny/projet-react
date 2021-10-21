import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
export default function Footer(props) {
	return (
		<Router>
			<div>
				<div>
					<ul className="navbar-nav mr-auto">
						<li>
							<Link to={"/"} className="nav-link">
								{" "}
								Politique de confidentialité{" "}
							</Link>
						</li>
						<li>
							<Link to={"/products"} className="nav-link">
								Politique Générales de vente
							</Link>
						</li>
						<li>
							<Link to={"/services"} className="nav-link">
								Conditions Générales D'utilisation
							</Link>
						</li>
						<li>
							<Link to={"/config"} className="nav-link">
								Politique d'envoi
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<ul className="navbar-nav mr-auto">
						<li>
							<Link to={"/"} className="nav-link">
								{" "}
								Politique de confidentialité{" "}
							</Link>
						</li>
						<li>
							<Link to={"/products"} className="nav-link">
								Politique Générales de vente
							</Link>
						</li>
						<li>
							<Link to={"/services"} className="nav-link">
								Conditions Générales D'utilisation
							</Link>
						</li>
						<li>
							<Link to={"/config"} className="nav-link">
								Politique d'envoi
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<ul className="navbar-nav mr-auto">
						<li>
							<Link to={"/"} className="nav-link">
								{" "}
								Politique de confidentialité{" "}
							</Link>
						</li>
						<li>
							<Link to={"/products"} className="nav-link">
								Politique Générales de vente
							</Link>
						</li>
						<li>
							<Link to={"/services"} className="nav-link">
								Conditions Générales D'utilisation
							</Link>
						</li>
						<li>
							<Link to={"/config"} className="nav-link">
								Politique d'envoi
							</Link>
						</li>
					</ul>
				</div>
				<Switch>
					{/* A modifier */}
					{/* <Route path="/" exact {...props} component={} /> */}
					{/* <Route path="/" exact {...props} component={} /> */}
					{/* <Route path="/" exact {...props} component={} /> */}
					{/* <Route path="/" exact {...props} component={} /> */}
					{/* <Route path="/" exact {...props} component={} /> */}
					{/* <Route path="/" exact {...props} component={} /> */}
					{/* <Route path="/" exact {...props} component={} /> */}
				</Switch>
			</div>
		</Router>
	);
}
