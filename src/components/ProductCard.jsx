import React from 'react'

export const ProductCard = ({imageUrl, title, brand, price}) => {
  return (
    <>
        <div className="card" style={{width: '18rem', height:'40rem'}}>
        <img src= {imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{brand}</p>
            <p className="card-text mt-2">{price}</p>
            <a href="#" className="btn btn-primary">Add to cart</a>
        </div>
        </div>
    </>
  )
}