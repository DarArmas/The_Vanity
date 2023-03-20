import { Key } from '@mui/icons-material';
import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const PaginationProducts = ({totalProducts, productsPerPage, setCurrentPage, currentPage}) => {

    let pages= [];
    if(totalProducts && productsPerPage){
        for(let i=1; i<=Math.ceil(totalProducts / productsPerPage) ; i++){
            pages.push(i);
        }
    }

  return (
    <div>
        <Pagination count={pages.length} onChange={(e,value)=> setCurrentPage(value)} size={'large'} color={'secondary'}/>
    </div>
  )
}
