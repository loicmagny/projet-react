import React from "react";

export default function FiltersProductList()
{
    return(
        <div className="filters">
            <ul className="filters__list">
                <li className="filters__list__item">Marques</li>
                <li className="filters__list__item">Prix</li>
                <li className="filters__list__item">Type</li>
                <li className="filters__list__item">RGB</li>
            </ul>
        </div>
    )
}