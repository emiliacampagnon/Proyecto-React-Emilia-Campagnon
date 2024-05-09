import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useContext, useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { CartContext } from "../../../context/CartContext";
import { InsertInvitationOutlined } from "@mui/icons-material";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  const { addToCart, getQuantityById } = useContext(CartContext);
  let initial = getQuantityById(+id);
  console.log(initial);

  useEffect(() => {
    let itemEncontrado = products.find((product) => product.id === +id);
    const getProduct = new Promise((resolve, reject) => {
      resolve(itemEncontrado);
    });
    getProduct.then((res) => setItem(res));
  }, [id]);
  const onAdd = (cantidad) => {
    let product = { ...item, quantity: cantidad };
    addToCart(product);
  };

  return <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
};
export default ItemDetailContainer;
