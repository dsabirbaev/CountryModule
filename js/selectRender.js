

import renderData from "./render.js";
import normalize from "./normalize.js";
let {allCountries, countriesWithId} = normalize;

const select = document.querySelector('.countries-search__select');
let cards = document.querySelector('.countries-cards');

select.addEventListener('change', (e) => {
    cards.innerHTML = "";

    const result = allCountries.filter((el) => {
        return el.region.toLowerCase() === e.target.value.toLowerCase();
    })

    renderData(result);
})

export default select;