
import uniqueRegion from "./uniqueregions.js";

const select = document.querySelector('.countries-search__select');

let createOption = uniqueRegion.forEach((value) => {
    let option = document.createElement('option');
    option.textContent = value;
    select.append(option);
})




export default createOption;