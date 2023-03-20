import { useEffect, useContext } from 'react';
import { PRODUCT_TYPES } from '../utils/constants';
import { ProductsContext } from '../context/productsContext';
import { TableProducts } from '../components/TableProducts';
import { Footer } from '../components/Footer';
import { Location } from '../components/Location';

export const LandingPage = () => {
    const { products, productsByType } = useContext(ProductsContext);
    
  return (
    <>
        <TableProducts/>
        <Location/>
    </>
  )
}
