import React, { useState, useEffect } from "react";
import { getAxiosData } from "../functions/axiosCall.js";
import banner00 from "../assets/img/homepage/banner-00.jpg";
import banner01 from "../assets/img/homepage/banner-01.jpg";
import banner02 from "../assets/img/homepage/banner-02.jpg";
import ProdsCard from "../components/prodsCardsList";
import { urlProduct } from "../functions/globals";

function Home() {
	const [loading, setLoading] = useState(true);
	const [prods, setProds] = useState([]);
	useEffect(() => {
		getAxiosData(`${urlProduct}`).then((resp) => {
			console.log(resp.data);
			setProds(resp.data);
			setLoading(false);
		});
	}, []);
	return loading ? (
		<p>Chargement en cours</p>
	) : (
		<section className="homeSection">
			<div className="homeSection__slider">
				<div className="homeSection__slider__text">
					<h2>
						EXPLOREZ TOUTES <br /> VOS POSSIBILITES
					</h2>
					<h3>
						DECOUVREZ LA <br /> DERNIERE CARTE NVIDIA.
					</h3>
				</div>
				<img src={banner01} alt="" className="homeSection__slider__img" />
			</div>
			<div className="homeSection__products">
				{prods
					.filter((prod, index) => index < 4)
					.map((prod) => {
						return <ProdsCard key={prod.id} prod={prod} />;
					})}
			</div>
			<div className="homeSection__image">
				<img src={banner00} alt="" className="homeSection__image__item" />
				<img src={banner02} alt="" className="homeSection__image__item" />
			</div>
		</section>
	);
}

export default Home;
