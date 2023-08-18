import { PRODUCT_TYPES } from "./constants";

export const capitalizeBrand = (brand)=>{
  return brand.charAt(0).toUpperCase() + brand.slice(1);
}

export const a11yProps= (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const filterValue = (category) =>{
   return Object.keys(PRODUCT_TYPES)
        .filter(key => key.includes(category))
        .reduce((obj, key) => {
        obj[key] = PRODUCT_TYPES[key];
        return obj[key];
    }, {});
}

//comentario para que publique
