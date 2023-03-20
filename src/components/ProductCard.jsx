import React, { useState, useContext, useEffect } from 'react'
import { ProductsContext } from '../context/productsContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { DEFAULT_IMAGE } from '../utils/constants'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import IconButton from '@mui/material/IconButton';
import { capitalizeBrand } from '../utils/utils'

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
    console.log("Hiding image   ")
   setShowImage(false)
  }

  return (
    <div className="col">  
        <Card sx={{ maxWidth: 400 }}>
          {
            showImage 
              ? 
                <CardMedia
                  sx={{ height: 390 }}
                  image={imageUrl}
                  title={title}
                  onError={ () => hideImg() }
                />
              : 
                <CardMedia
                  sx={{ height: 390 }}
                  image={DEFAULT_IMAGE}
                  title={title}
                />
          }
          <CardContent sx={{background:'#eee7f6'}}>
            <Typography gutterBottom variant="h4" component="div" color="#473889">
              {capitalizeBrand(brand)}
            </Typography>
            <Typography variant="h6" color="#473889">
              {title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {price}
            </Typography>
          </CardContent>
          <CardActions sx={{background:'#eee7f6'}}>
          <IconButton onClick={() => dispatchClick(id,title)} disabled={isDisabled}>
              <AddShoppingCartTwoToneIcon fontSize={'large'}/>
            </IconButton>
            <Typography  color="#473889">
              Comprar
            </Typography>
          </CardActions>
        </Card>
    </div>
  )
}