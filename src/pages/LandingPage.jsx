import { useEffect, useContext } from 'react';
import { PRODUCT_TYPES } from '../utils/constants';
import { ProductsContext } from '../context/productsContext';
import { TableProducts } from '../components/TableProducts';

export const LandingPage = () => {
    const { products, productsByType } = useContext(ProductsContext);
    
  return (
    <>
        <TableProducts/>
    </>
  )
}
