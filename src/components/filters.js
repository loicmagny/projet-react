import React from "react";

export default function FiltersProductList() {
	return (
		<div className="filters">
			<ul className="filters__list">
				<li>
					<label for="name">Chercher: </label>
					<input type="text" id="search" name="search" size="10" />
				</li>
				<li className="filters__list__item">
					Carte mere
				</li>
				<li className="filters__list__item">
					CPU
				</li>
				<li className="filters__list__item">
					
				</li>
				
			</ul>
		</div>
	);
}
