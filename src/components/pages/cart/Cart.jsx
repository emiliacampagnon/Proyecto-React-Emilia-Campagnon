import { Link } from "react-router-dom";
const Cart = ({ productosAgregados }) => {
  return (
    <div>
      <h1></h1>
      <h2>Productos del carrito </h2>
      <Link to="/checkout">
        <button>Finalizar Compra</button>
      </Link>
      <div></div>
    </div>
  );
};

export default Cart;
