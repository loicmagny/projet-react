import React, { useState, useEffect } from "react";
import { getAxiosData } from "../functions/axiosCall.js";
import banner00 from "../assets/img/homepage/banner-01.jpg";
import banner01 from "../assets/img/homepage/banner-05.png";
import banner02 from "../assets/img/homepage/banner-02.jpg";
import loadingimg from "../assets/img/loading.svg";
import ProdsCard from "../components/prodsCardsList";
import { urlProduct } from "../functions/globals";


function Home() {
	const [loading, setLoading] = useState(true);
	const [prods, setProds] = useState([]);
	useEffect(() => {
		getAxiosData(`${urlProduct}`).then((resp) => {
			setProds(resp.data);
			setLoading(false);
		});
	}, []);
	return loading ? (
		<img src={loadingimg} alt="" className="loading"/>
	) : (
		<section className="homeSection">
			<div className="homeSection__slider">
				<div className="homeSection__slider__text">
					<h2>
						EXPLOREZ TOUTES <br /> VOS POSSIBILITES
					</h2>
					<h3>
						DECOUVREZ LA <br /> DERNIERE SOURIS LOGITECH.
					</h3>
				</div>
				<img src={banner01} alt="" className="homeSection__slider__img" />
			</div>
			<div className="homeSection__products">
				<h2>Produits a la une :</h2>
				<div className="homeSection__products__cards">
				{prods
					.filter((prods, index) => index < 4)
					.map((prods) => {
						return <ProdsCard key={prods.id} prod={prods} />;
					})}
				</div>
			</div>
			<div className="homeSection__slider">
				<div className="homeSection__slider__reverse">
					<h2>
						DECOUVREZ <br /> LA PERFORMANCE
					</h2>
					<h3>
						VOIR PLUS SUR LA <br /> DERNIERE SOURIS CORSAIR.
					</h3>
				</div>
				<img src={banner00} alt="" className="homeSection__slider__img" />
			</div>
			<div className="homeSection__content_text">
				<div className="homeSection__content_text__content">
				<h2>Envie d'une nouvelle carte graphique ?</h2>
				<p>
				La <span>GeForce RTX 3080</span> est une carte graphique idéale pour jouer en 4K. Avec elle, Nvidia donne la possibilité d'exécuter les jeux en raytracing sans 
				anicroche dans cette définition pourtant si gourmande en ressources. Et si la carte dispose d'un dissipateur aussi original qu'efficace, il faut tout 
				de même garder en tête qu'il nécessite a minima un boîtier bien ventilé, sans quoi les nuisances sonores ont tendance à décoller.
				</p>
				</div>
				<div className="homeSection__content_text__content">
				<h2>Une souris rapide et sans fils ?</h2>
				<p>
				La technologie sans fil <span>LIGHTSPEED</span> vous offre plus de 29 heures d'autonomie et jusqu'à 20 mètres de liberté sans fil fiable.1Susceptible de varier en 
				fonction de l'environnement et du mode d'utilisation. Le calcul de l'autonomie de la batterie est basé sur un réglage du volume du casque à 50% et l'éclairage désactivé. Jouez en toute liberté sans la contrainte du câble.
				 Détendez-vous et immergez-vous dans votre jeu, votre musique, votre film ou tout ce que vous voulez. Soyez libre et jouez à votre manière.
				</p>
				</div>
			</div>
			<div className="homeSection__slider ">
				<div className="homeSection__slider__text">
					<h2>
						LA PERFORMANCE <br /> A L'ETAT PUR
					</h2>
					<h3>
						DECOUVREZ LA <br /> GEFORCE GTX 3080.
					</h3>
				</div>
				<img src={banner02} alt="" className="homeSection__slider__img exept" />
			</div>
		</section>
	);
}

export default Home;
