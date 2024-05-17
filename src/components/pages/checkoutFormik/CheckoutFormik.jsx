import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import "./CheckoutFormik.css";

export const CheckoutFormik = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const total = getTotalPrice();
  const [orderId, setOrderId] = useState(null);
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      document: "",
      phone: "",
      email: "",
    },
    onSubmit: (data) => {
      let obj = {
        buyer: data,
        items: cart,
        total: total,
      };
      console.log(obj);

      let ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, obj)
        .then((res) => setOrderId(res.id))
        .catch((error) => console.log(error));

      cart.forEach((product) => {
        let refDoc = doc(db, "products", product.id);

        updateDoc(refDoc, { stock: product.stock - product.quantity });
      });
      clearCart();
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      surname: Yup.string().required(),
      document: Yup.string().required().min(7),
      phone: Yup.string().required().min(10),
      email: Yup.string().required().email(),
    }),
    validateOnChange: false,
  });

  return (
    <div style={{ padding: 10 }}>
      {orderId ? (
        <h1 style={{ padding: "180px" }}>Su compra es la: {orderId} </h1>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            style={{ width: "50vw", padding: 10 }}
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            name="name"
            error={errors.nombre ? true : false}
            helperText={errors.nombre ? "Este campo es obligatorio" : ""}
          />
          <TextField
            style={{ width: "50vw", padding: 10 }}
            type="text"
            placeholder="Apellido"
            onChange={handleChange}
            name="surname"
            error={errors.apellido ? true : false}
            helperText={errors.apellido ? "Este campo es obligatorio" : ""}
          />
          <TextField
            style={{ width: "50vw", padding: 10 }}
            type="text"
            placeholder="Documento"
            onChange={handleChange}
            name="document"
            error={errors.documento ? true : false}
            helperText={errors.documento ? "Este campo es obligatorio" : ""}
          />
          <TextField
            style={{ width: "50vw", padding: 10 }}
            type="text"
            placeholder="Telefono"
            onChange={handleChange}
            name="phone"
            error={errors.telefono ? true : false}
            helperText={errors.telefono ? "Este campo es obligatorio" : ""}
          />
          <TextField
            style={{ width: "50vw", padding: 10 }}
            type="text"
            placeholder="Mail"
            onChange={handleChange}
            name="email"
            error={errors.mail ? true : false}
            helperText={errors.mail ? "Este campo es obligatorio" : ""}
          />
          <Button
            className="finalizarCheckout"
            type="submit"
            variant="outlined"
            style={{
              width: "47vw",
              margin: 20,
              padding: 10,
              justifyContent: "center",
              display: "flex",
            }}
          >
            Enviar
          </Button>
        </form>
      )}
    </div>
  );
};
