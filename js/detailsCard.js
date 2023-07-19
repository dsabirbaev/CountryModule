
import normalize from "./normalize.js"
let {countriesWithId} = normalize;

import renderModal from "./renderModal.js";


let countriesCard = document.querySelector('.countries-cards')
let btnMore = document.querySelector('.countries-card__btn')
let modalWrap = document.querySelector('.modal-wrapper')


function findElement(data, id){
    return data.filter(item => item.id === +id);
}

countriesCard.addEventListener('click', (e) => {
    if(e.target.classList.contains('countries-card__btn')){
        const countryID = e.target.parentNode.getAttribute('data-country');
      
        const result = findElement(countriesWithId, countryID)[0];
        localStorage.setItem('country', JSON.stringify(result));
        modalWrap.style.cssText = "display: grid"
        renderModal();

        document.body.style.cssText = "overflow: hidden"
    }
})

export default countriesCard