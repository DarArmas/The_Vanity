import { useEffect, useContext } from 'react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCT_TYPES } from '../utils/constants';
import { ProductsContext } from '../context/productsContext';

export const LandingPage = () => {
    const { products, productsByType } = useContext(ProductsContext);

    useEffect(() => {
        productsByType(PRODUCT_TYPES.MASCARA);
    }, [])

    console.log(products);

  return (
    <div className="container text-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products && products.length>0 
                    ? 
                       products.map(product =>(
                        <ProductCard imageUrl={product.image_link}
                            key={product.id}
                            title={product.name}
                            id={product.id}
                            brand={product.brand}   
                            price={`${product.price_sign}${product.price}`}
                        /> 
                       ))
                    : 
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
        </div>
    </div>

  )
}
