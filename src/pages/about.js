import React, { Component } from "react";

class About extends Component {
	render() {
		return (
			<div className="about">
				<h2>A propos</h2>
				<div className="about__map">
					<h3>Nous trouver</h3>
					<iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882.9068390586153!2d2.3000751412632177!3d49.89106261234059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e784471eaf9929%3A0xb0f88598ff2e1f6b!2s42%20Rue%20des%20Jacobins%2C%2080000%20Amiens!5e0!3m2!1sfr!2sfr!4v1635792804587!5m2!1sfr!2sfr" 
					width="800" height="500" loading="lazy"></iframe>
					<p>Adresse : 45 rue des jacobins, Amiens, 80000</p>
				</div>
				<div className="about__us">
					<h3>Qui sommes nous ?</h3>
				<p>
					ArchiTech, un des sites pionniers du e-commerce en France et spécialiste de la vente à distance de matériel informatique, 
					est aujourd'hui un acteur majeur dans le domaine du high-tech sur le web. ArchiTech a été plusieurs fois récompensé pour la qualité
					 de sa Relation Clients, vous pourrez donc vous rapprocher sans hésiter une seule seconde de notre service Relation Client pour tout
					  conseil avant-vente d'un PC portable ou PC de bureau par exemple ou pour une question SAV ou retour produit. De plus, si vous hésitez 
					  sur l'achat de matériel informatique, comme un écran PC, un casque VR HTC VIVE ou Oculus Rift (découvrez également notre salle de réalité 
					  virtuelle près de Lyon), vous pourrez vous référer aux avis certifiés et véritables de nos clients et aux différents tests presse réalisés.
					   Aujourd'hui, en tant que leader du e-commerce sur le marché de l'informatique et du high-tech, nous nous efforçons à répondre aux besoins
					   croissants en matériel dernière technologie de nos clients. Que vous soyez à la recherche de matériel type processeur, carte graphique, disque 
					   SSD, pour débutant, confirmé ou encore expert pour votre ordinateur ou de produits High Tech pour équiper votre salon (TV, vidéoprojecteur, lecteur
					    multimédia), ArchiTech propose un catalogue de plus de 25 000 références de grandes marques dans les univers de l'informatique (serveur 
						NAS ou encore de la mémoire pour PC portable), l'audio, la téléphonie (smartphone entre autres), la vidéo, la connectique (pour des câbles
						 type RJ45)...qui répondra à vos attentes. Les amateurs de jeu ne sont pas en reste puisque ArchiTech, qui possède sa propre Team Gamers,
						 propose également une large gamme de produits : PC portable gamer ou PC gamer ainsi que tous les périphériques nécessaires comme un clavier 
						 gamer, une souris gamer, un micro casque ou encore un tapis de souris. ArchiTech propose régulièrement des offres promotionnelles et des 
						 opérations spéciales, donc n'hésitez pas à profiter de nos réductions ArchiTech, code promo ArchiTech pour toujours plus de satisfaction. 
						 Profitez également de tous nos services pour acheter en toute sérénité : le Pack Confort d'extension de Garanties et Services, les options 
						 de livraison (express, relais colis, retrait dans nos points de vente, livraison dom tom...) et les modes de paiement sécurisés (CB, en 
						 trois fois...). Enfin, pour répondre à toutes vos questions, rendez-vous sur votre espace d'aide. À ne pas rater sur ArchiTech. Code promo
						  ArchiTech. École de l'informatique et du numérique près de Lyon.
				</p>
				</div>
			</div>
		);
	}
}

export default About;
