import React, { useEffect, useState } from 'react'
import { productsData } from '../data/products';
import { PRODUCT_TYPES } from '../utils/constants';


export const useData = () => {
  
    const [products, setProducts] = useState([]);
    let data;
    const productsByType = (typeProduct) => {
        switch (typeProduct) {
            case (PRODUCT_TYPES.LIPSTICK):
                data = productsData.filter( product => product.product_type === PRODUCT_TYPES.LIPSTICK);
                setProducts(data);
                break;
            case (PRODUCT_TYPES.EYEBROW):
                data = productsData.filter( product => product.product_type === PRODUCT_TYPES.EYEBROW);
                setProducts(data);
                break;
            case (PRODUCT_TYPES.EYESHADOW):
                data = productsData.filter( product => product.product_type === PRODUCT_TYPES.EYESHADOW);
                setProducts(data);
                break;
            case (PRODUCT_TYPES.MASCARA):
                data = productsData.filter( product => product.product_type === PRODUCT_TYPES.MASCARA);
                setProducts(data);
                break;
            case (PRODUCT_TYPES.NAIL_POLISH):
                data = productsData.filter( product => product.product_type === PRODUCT_TYPES.NAIL_POLISH);
                setProducts(data);
                break;
            default:
                setProducts([]);
                break;
        }
    }
    
  
  
    return {
        products,
        productsByType
    }
}
