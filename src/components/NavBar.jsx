import { ShoppingBagOutlined } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import {useContext, useState} from "react";
import { ProductsContext } from "../context/productsContext";
import { CartModal } from "./CartModal";

export const NavBar = () => {
  const { cart } = useContext(ProductsContext);
  const [modalShow, setModalShow] = useState(false);

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
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
