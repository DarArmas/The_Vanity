import { Grid, IconButton } from "@mui/material";
import Button from '@mui/material/Button'; 
import Modal from "react-bootstrap/Modal";
import { ProductsContext } from "../context/productsContext";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { width } from "@mui/system";

export const CartModal = (props) => {
  const { cart, removeFromCart, modifyQty } = useContext(ProductsContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    let pricesArray = cart.map((product) => product.price * product.qty);
    console.log(pricesArray);
    const initialValue = 0;
    const totalSum = pricesArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    setTotalPrice(totalSum.toFixed(2));
  }, [cart]);

  const dispatchClick = (id, title) => {
    MySwal.fire({
      icon: "error",
      title: `${title} se ha eliminado del carrito`,
      showConfirmButton: false,
      timer: 1500,
    });
    removeFromCart(id);
  };

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Carrito de compras
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ width: "100%", textAlign: "center" }}>
          <table style={{ width: "100%", marginBottom: "10px", tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th style={{width: "30%"}}>Producto</th>
                <th style={{width: "10%"}}>Precio</th>
                <th style={{width: "10%"}}>Cantidad</th>
                <th style={{width: "10%"}}>Borrar</th>
              </tr>
            </thead>
            <tbody>
              {cart && cart.length > 0 ? (
                cart.map((item, index) => (
                  <tr key={index}>
                    <td width={"50%"}>
                      <div
                        className="d-flex flex-row"
                        style={{ width: "100%", justifyContent: "flex-start" }}
                      >
                        <img
                          src={item.image_link}
                          style={{
                            height: "8rem",
                            width: "10rem",
                            overflow: "hidden",
                            margin: "0rem 2rem"
                          }}
                          className="card-img-top"
                          alt={item.name}
                        />
                        <div >{item.name}</div>
                      </div>
                    </td>
                    <td>${item.price * item.qty}</td>
                    <td>
                      <div className="d-flex flex-row justify-content-between mx-3" style={{gap: "20px"}}>
                        <Button 
                          variant="contained"
                          data-type="decrease"
                          onClick={(e) => modifyQty(item.id, e)}
                          disabled={item.qty <= 1}
                          color='secondary'
                          size="small"
                          >
                            -
                        </Button>
                        <div style={{width: "1rem"}}>
                        {item.qty}
                        </div>
                        <Button
                          variant="contained"
                          data-type="increase"
                          onClick={(e) => modifyQty(item.id, e)}
                          color='secondary'
                          size="small"
                          sx={{width:'.5rem'}}
                        >
                          +
                        </Button>
                      </div>
                    </td>
                    <td>
                      <IconButton
                        onClick={() => dispatchClick(item.id, item.name)}
                      >
                        <DeleteIcon color="secondary" />
                      </IconButton>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>No has agregado nada al carrito</td>
                </tr>
              )}
            </tbody>
          </table>
          <Button style={{ width: "85%", margin: "0px auto", background:'#30246e', fontWeight:'bold'}} variant="contained">
            Total ${totalPrice}
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}variant="contained" color='secondary'><ReplyAllIcon/></Button>
      </Modal.Footer>
    </Modal>
  );
};
