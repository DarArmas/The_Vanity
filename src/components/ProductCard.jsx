import React, { useState, useContext, useEffect } from 'react'
import { ProductsContext } from '../context/productsContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const ProductCard = ({imageUrl, title, id, brand, price}) => {
  const { cart, addToCart } = useContext(ProductsContext);
  const MySwal = withReactContent(Swal)

  const dispatchClick = (id, title) => {
    MySwal.fire({
      icon: 'success',
      title: `${title} se ha añadido al carrito`,
      showConfirmButton: false,
      timer: 1500
    })
    addToCart(id)
  }


  const [isDisabled, setisDisabled] = useState(false); 
  useEffect(() => {
    let productIndex = cart.findIndex(product => product.id === id)
     setisDisabled(productIndex >= 0);  
  }, [cart])
  const [showImage, setShowImage] = useState(true)

  const hideImg = () => {
   setShowImage(false)
  }

  const inCart = () => {
    let product = products.find(product => product.id === productId)


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
            <button className="btn btn-primary" onClick={() => dispatchClick(id,title)} disabled={isDisabled}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}