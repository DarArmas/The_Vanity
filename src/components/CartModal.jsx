import { Grid, IconButton } from "@mui/material";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ProductsContext } from "../context/productsContext";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const CartModal = (props) => {
  const { cart, removeFromCart, modifyQty } = useContext(ProductsContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    let pricesArray = cart.map((product) => product.price * product.qty);
    console.log("cargue soy el modal");
    console.log(pricesArray);
    const initialValue = 0;
    const totalSum = pricesArray.reduce(
      (accumulator, currentValue) => accumulator + parseInt(currentValue),
      initialValue
    );
    setTotalPrice(totalSum);
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
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ width: "100%", textAlign: "center" }}>
          <table style={{ width: "100%", marginBottom: "10px" }}>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody>
              {cart && cart.length > 0 ? (
                cart.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <div className="d-flex flex-row">
                        <Button
                          data-type="decrease"
                          onClick={(e) => modifyQty(item.id, e)}
                          disabled={item.qty <= 1}
                        >
                          -
                        </Button>
                        {item.qty}
                        <Button
                          data-type="increase"
                          onClick={(e) => modifyQty(item.id, e)}
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
          <Button style={{ width: "85%", margin: "0px auto" }}>
            Total ${totalPrice}
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Seguir Comprando</Button>
      </Modal.Footer>
    </Modal>
  );
};
