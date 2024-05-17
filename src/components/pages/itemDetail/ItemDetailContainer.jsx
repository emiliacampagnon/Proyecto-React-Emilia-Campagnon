import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useContext, useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { red } from "@mui/material/colors";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  const { addToCart, getQuantityById } = useContext(CartContext);
  let initial = getQuantityById(+id);
  console.log(initial);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });

    // let itemEncontrado = products.find((product) => product.id === +id);
    // const getProduct = new Promise((resolve, reject) => {
    //   resolve(itemEncontrado);
    // });
    // getProduct.then((res) => setItem(res));
  }, [id]);
  const onAdd = (cantidad) => {
    let product = { ...item, quantity: cantidad };
    addToCart(product);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
};
export default ItemDetailContainer;
