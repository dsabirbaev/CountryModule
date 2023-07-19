



let countryItem = document.querySelector('.country-item');

function renderModal(){
    let {image, name, population, region, capital, subregion, nativeName, topLevelDomain, currency, lang, borders } = JSON.parse(localStorage.getItem('country'))
    let modalResult = "";
    modalResult += `
        <div class="country-card">
            <img class="country-card__img" src="${image}" alt="flag">
            <div class="country-card__body">
                <h5 class="country-card__body--name">${name}</h5>
                <div class="country-card__body--info">
                    <ul>
                        <li> Native Name: <span>${nativeName}</span></li>
                        <li> Population:  <span>${population}</span></li>
                        <li> Region: <span>${region}</span></li>
                        <li> Sub Region: <span>${subregion}</span></li>
                        <li> Capital: <span>${capital}</span></li>
                    </ul>
                    <ul>
                        <li>Top Level Domain: <span>${topLevelDomain}</span></li>
                        <li>Currencies: <span>${currency}</span></li>
                        <li>Languages: <span>${lang}</span></li>
                    </ul>
                </div>

                <div class="country-card__body--border">
                    <p>Border Countries: </p> <span class="border-divide">${borders}</span>
                </div>
            </div>
        </div> 
    `

    countryItem.innerHTML = modalResult;
    
}

export default renderModal