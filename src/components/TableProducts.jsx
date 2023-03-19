import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { CATEGORIES, PRODUCT_TYPES } from '../utils/constants';
import { TabPanel } from './TabPanel';
import { a11yProps, filterValue } from '../utils/utils';
import { ProductsContext } from '../context/productsContext';
import { ProductCard } from './ProductCard';
import { PaginationProducts } from './Pagination';


export const TableProducts = () => {
    const { products, productsByType } = useContext(ProductsContext);
    const [value, setValue] = useState(0);
    const [searchValue, setSearchValue] = useState(PRODUCT_TYPES.LIPSTICK);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductPerPage] = useState(5)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const setFilter = (cat, setSearchValue) => {
        let category = cat.length > 1 ? cat.toUpperCase().split(' ').join('_') : cat.toUpperCase();
        setSearchValue(filterValue(category));
    }

    useEffect(() => {
        productsByType(searchValue);
    }, [searchValue])

    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    const currentProducts = (products && products.length>0) ? products.slice(firstProductIndex, lastProductIndex) : products;

  return (
    <Box sx={{ width: '100%', justifyContent:'center' }}>
      <Box sx={{ display:'flex', borderBottom: 1, borderColor: 'divider', justifyContent:'center' }}>
        <Tabs value={value} onChange={handleChange} aria-label="products tab" textColor='secondary' indicatorColor="secondary" >
        {
            CATEGORIES.map( (cat, index) =>(
                <Tab label={cat} key={index} onClick={() =>setFilter(cat, setSearchValue)} {...a11yProps({index})} />
            )) 
        }
        </Tabs>
      </Box>    
      {Object.keys(PRODUCT_TYPES).map( (product, index) =>(
        <TabPanel value={value} index={index} key={index} >
            <div className="container text-center">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        (currentProducts && currentProducts.length>  0) 
                        ?
                        currentProducts.map(product =>(
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
                <div className="pagination">
                    <PaginationProducts totalProducts={products.length} productsPerPage={productsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                </div>
            </div>
        </TabPanel>
      ))}
    </Box>
  );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};