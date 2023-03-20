import { useContext } from 'react';
import { ProductsContext } from '../context/productsContext';
import { TableProducts } from '../components/TableProducts';
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
