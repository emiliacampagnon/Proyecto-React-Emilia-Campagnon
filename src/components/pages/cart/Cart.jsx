import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";
import { lightBlue } from "@mui/material/colors";

const Cart = ({ cart, clearCart, deleteById, total }) => {
  return (
    <div>
      <h1>Carrito</h1>
      <div className="cardcart">
        {cart.map((product) => (
          <div key={product.id}>
            {
              <Card className="card">
                <CardMedia sx={{ height: 200 }} image={product.img} />

                <CardContent>
                  <Typography
                    style={{ height: "40%" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    style={{ height: "20%" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    $ {product.price} .-
                  </Typography>
                  <Typography
                    style={{ height: "20%" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    cant. {product.quantity} un.
                  </Typography>
                  <Button
                    className="buttoneliminarproducto"
                    onClick={() => deleteById(product.id)}
                    variant="contained"
                  >
                    Eliminar del carrito
                  </Button>
                </CardContent>
              </Card>
            }
          </div>
        ))}
      </div>
      <Typography
        style={{
          fontSize: "20px",
          margin: "10px",
          padding: "10px",
          height: "40%",
        }}
        variant="body2"
        color="text.secondary"
      >
        {" "}
        El total a pagar es ${total}
      </Typography>
      <h2> </h2>
      <Button onClick={clearCart} variant="outlined">
        Vaciar Carrito
      </Button>

      <Link to="/checkout">
        <Button variant="contained">Finalizar Compra</Button>
      </Link>
    </div>
  );
};

export default Cart;
