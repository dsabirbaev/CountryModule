
import normalize from "./normalize.js";
let {allCountries} = normalize;




let cards = document.querySelector('.countries-cards');
function renderData(data){
    data.forEach((value, index) => {
        let card = document.createElement('div');
        card.classList.add('countries-card');

        card.innerHTML = `
            
            <img class="countries-card__img" src="${value.image}" alt="flag">
           
            <div class="countries-card__body">
                <h5 class="countries-card__body--name">${value.name}</h5>
                <ul class="countries-card__body--list">
                    <li>Population: <span>${value.population}</span></li>
                    <li>Region: <span>${value.region}</span></li>
                    <li>Capital: <span>${value.capital}</span></li>
                </ul>
            </div>

            <button class="countries-card__btn">More...</button>
        `
        card.dataset.country = index+1;
        cards.append(card);
    })
}




renderData(allCountries);


export default renderData;