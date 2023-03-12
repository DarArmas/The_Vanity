import React, { useState } from 'react'

export const ProductCard = ({imageUrl, title, brand, price}) => {

  const [showImage, setShowImage] = useState(true)

  const hideImg = () => {
   setShowImage(false)
  }

  return (
    <div className="col">
      <div className="card h-100" >
        {
            showImage 
              ? 
                <img src= {imageUrl} className="card-img-top" alt={title} onError={hideImg} />
              : 
                <div className="d-flex justify-content-center">
                  <div className="spinner-grow text-info" role="status">
                      <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
        }
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{brand}</p>
            <p className="card-text mt-2">{price}</p>
            <a href="#" className="btn btn-primary">Add to cart</a>
        </div>
      </div>
    </div>
  )
}