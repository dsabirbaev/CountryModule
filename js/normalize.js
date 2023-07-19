
import data  from "./country.js";


const allCountries = data.map((el) => {
    const currencies = el.currencies ? el.currencies.map(value => value.name) : [];
    const languages = el.languages ? el.languages.map(value => value.name) : [];
    const borders = el.borders ? el.borders.map(value => value) : [];
    return {
        image: el.flags.png,
        name: el.name,
        population: `${el.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
        region: el.region,
        capital: el.capital,
        subregion: el.subregion,
        nativeName: el.nativeName,
        topLevelDomain: el.topLevelDomain,
        currency: currencies,
        lang: languages,
        borders: borders
    }
})

const countriesWithId = allCountries.map((country, index) => {
    return { id: index+1, ...country };
});


export default {allCountries, countriesWithId};