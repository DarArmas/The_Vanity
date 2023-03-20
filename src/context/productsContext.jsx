import { createContext, useState, useEffect } from "react";
import { useData } from "../hooks/useData";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const {products, productsByType, setProducts, initialProducts} = useData();
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const searchProducts = (e) => {
    if(e.target.value.length >= 3){
      setSearch(e.target.value);
      let matchingProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(search.trim().toLowerCase());
      });
      setProducts(matchingProducts);
    }else{
      setProducts(initialProducts);
    }
 
  }

  const addToCart = (productId) => {
    let product = products.find(product => product.id === productId)
    product = {
      ...product, 
      "qty": 1
    }
    setCart([...cart, product]);
  }

  const removeFromCart = (productId) => {
    const newProducts = cart.filter(product => product.id !== productId);
    setCart(newProducts);
  }


  const modifyQty = (productId, e) => {
    const action = e.target.dataset.type;
    var newCart = [];

    switch(action){
      case 'increase':
        newCart = cart.map(product => {
          if(product.id === productId){
            return {...product, qty: product.qty + 1}
          }
          return product
        })
    
        setCart(newCart);
        break;

      case 'decrease':
        newCart = cart.map(product => {
          if(product.id === productId && product.qty > 1){
            return {...product, qty: product.qty - 1}
          }
          return product
        })
    
        setCart(newCart);
        break;
    }   
  }

  return (
    <ProductsContext.Provider value={{ 
        products, 
        productsByType,
        cart,
        addToCart,
        removeFromCart,
        modifyQty,
        searchProducts
        }}>
        {children}
    </ProductsContext.Provider>
  );
};
