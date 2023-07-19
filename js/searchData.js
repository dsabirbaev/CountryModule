

import renderData from "./render.js";
import normalize from "./normalize.js";

let {allCountries, countriesWithId} = normalize;
let cards = document.querySelector('.countries-cards');


const input = document.querySelector('.countries-search__input--inp');
input.addEventListener('input', (e) => {
    cards.innerHTML = "";

    const result = allCountries.filter((el) => {
        return el.name.toLowerCase().includes(e.target.value.toLowerCase());
    })

    renderData(result);
})

export default input;