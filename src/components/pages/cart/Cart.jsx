import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";
import Swal from "sweetalert2";

const Cart = ({ cart, clearCart, deleteById, total }) => {
  const clearCartAlert = () => {
    Swal.fire({
      title: "¿Estás seguro de vaciar tu carrito?",
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: "No",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "El carrito se vació con éxito",
          icon: "success",
        });
      }
    });
  };

  const deleteProductAlert = (product) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar este producto del carrito?",
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: "No",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        deleteById(product.id);
        Swal.fire({
          title: "El producto se eliminó del carrito",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="contenedorCart">
      {cart.length === 0 ? (
        <div className="volverCart">
          <Typography variant="h6" gutterBottom>
            Tu carrito está vacío.
          </Typography>
          <Link to="/">
            <Button
              className="buttonVolver"
              variant="contained"
              color="primary"
            >
              Volver al inicio
            </Button>
          </Link>
        </div>
      ) : (
        cart.map((product) => (
          <div className="cartCart" key={product.id}>
            <Card className="cardCard">
              <CardMedia
                image={product.img}
                title="imagen producto"
                className="imgCard"
              />
              <CardContent className="cardContent">
                <Typography
                  className="typo"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {product.title}
                </Typography>
                <Typography
                  className="typoPrecio"
                  variant="body2"
                  color="text.secondary"
                >
                  $ {product.price} .-
                </Typography>
                <Typography
                  style={{ height: "20%" }}
                  variant="body2"
                  color="text.secondary"
                  className="typo"
                >
                  cant. {product.quantity} un.
                </Typography>
                <Button
                  className="buttoneliminarproducto"
                  onClick={() => deleteProductAlert(product)}
                  variant="contained"
                >
                  Eliminar del carrito
                </Button>
              </CardContent>
            </Card>
          </div>
        ))
      )}
      {total !== 0 && (
        <div className="finalizarCart">
          <Typography
            className="totalCart"
            style={{
              fontSize: "20px",
              margin: "10px",
              padding: "10px",
              height: "40%",
            }}
            variant="body2"
            color="text.secondary"
          >
            El total a pagar es ${total}
          </Typography>
          <Button
            className="buttoneliminarproducto"
            onClick={clearCartAlert}
            variant="outlined"
          >
            Vaciar Carrito
          </Button>
          <Link to="/checkout">
            <Button className="buttonFinalizar" variant="contained">
              Finalizar Compra
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
