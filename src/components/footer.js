import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
export default function Footer(props) {
	return (
		<Router>
			<footer>
				<section className="footersection">
				<div className="footersection__footerdiv">
					<ul className="footersection__footerdiv__list">
						<li>
							<Link to={"/"} className="footersection__footerdiv__list__item">
								{" "}
								Politique de confidentialité{" "}
							</Link>
						</li>
						<li>
							<Link to={"/products"} className="footersection__footerdiv__list__item">
								Politique Générales de vente
							</Link>
						</li>
						<li>
							<Link to={"/services"} className="footersection__footerdiv__list__item">
								Conditions Générales D'utilisation
							</Link>
						</li>
						<li>
							<Link to={"/config"} className="footersection__footerdiv__list__item">
								Politique d'envoi
							</Link>
						</li>
					</ul>
				</div>
				<div className="footersection__footerdiv">
					<ul className="footersection__footerdiv__list">
						<li>
							<Link to={"/"} className="footersection__footerdiv__list__item">
								{" "}
								Politique de confidentialité{" "}
							</Link>
						</li>
						<li>
							<Link to={"/products"} className="footersection__footerdiv__list__item">
								Politique Générales de vente
							</Link>
						</li>
						<li>
							<Link to={"/services"} className="footersection__footerdiv__list__item">
								Conditions Générales D'utilisation
							</Link>
						</li>
						<li>
							<Link to={"/config"} className="footersection__footerdiv__list__item">
								Politique d'envoi
							</Link>
						</li>
					</ul>
				</div>
				<div className="footersection__footerdiv">
					<ul className="footersection__footerdiv__list">
						<li>
							<Link to={"/"} className="footersection__footerdiv__list__item">
								{" "}
								Politique de confidentialité{" "}
							</Link>
						</li>
						<li>
							<Link to={"/products"} className="footersection__footerdiv__list__item">
								Politique Générales de vente
							</Link>
						</li>
						<li>
							<Link to={"/services"} className="footersection__footerdiv__list__item">
								Conditions Générales D'utilisation
							</Link>
						</li>
						<li>
							<Link to={"/config"} className="footersection__footerdiv__list__item">
								Politique d'envoi
							</Link>
						</li>
					</ul>
				</div>
				</section>
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
			</footer>
		</Router>
	);
}
