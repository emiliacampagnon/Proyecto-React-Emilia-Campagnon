import { TextField, Button } from "@mui/material";
import { useState } from "react";

const Checkout = () => {
  const [info, setInfo] = useState({
    nombre: "",
    apellido: "",
    documento: "",
  });
  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div style={{ padding: 10 }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={() => {
          handleSubmit;
        }}
      >
        <TextField
          style={{ width: "50vw", padding: 10 }}
          type="text"
          placeholder="Nombre"
          onChange={handleChange}
        />
        <TextField
          style={{ width: "50vw", padding: 10 }}
          type="text"
          placeholder="Apellido"
          onChange={handleChange}
        />
        <TextField
          style={{ width: "50vw", padding: 10 }}
          type="text"
          placeholder="Documento"
          onChange={handleChange}
        />

        <Button
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
    </div>
  );
};

export default Checkout;
