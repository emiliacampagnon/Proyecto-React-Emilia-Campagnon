import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();

  return (
    <Link to="/cart">
      <Badge className="custom-badge">
        <FaShoppingCart size="30px" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {total}
        </span>
        <span className="visually-hidden">items in cart</span>
      </Badge>
    </Link>
  );
};

export default CartWidget;
