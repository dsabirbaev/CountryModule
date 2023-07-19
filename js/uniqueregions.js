

import data from "./country.js";

const regions = [];

data.forEach((value) => {
    regions.push(value.region);
})
const uniqueRegion = Array.from(new Set(regions)); 


export default uniqueRegion