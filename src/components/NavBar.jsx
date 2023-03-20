import { ShoppingBagOutlined } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import {useContext, useState} from "react";
import { ProductsContext } from "../context/productsContext";
import { CartModal } from "./CartModal";
import Button from '@mui/material/Button';  
import SearchIcon from '@mui/icons-material/Search';

export const NavBar = () => {
  const { cart } = useContext(ProductsContext);
  const [modalShow, setModalShow] = useState(false);

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand">The Vanity</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <Button variant="contained" color="secondary" >
           <SearchIcon />
          </Button>
          <IconButton aria-label="cart" onClick={() => setModalShow(true)}>
            <Badge badgeContent={cart.length} color="error" showZero>
              <ShoppingBagOutlined color="secondary" />
            </Badge>
          </IconButton>
        </form>
      </div>
       <CartModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </nav>
  );
};
