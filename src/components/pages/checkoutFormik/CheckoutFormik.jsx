import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export const CheckoutFormik = () => {
  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      documento: "",
      telefono: "",
      mail: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    // validationSchema: Yup.object({
    //   nombre: Yup.string().required(),
    //   apellido: Yup.string().required(),
    //   documento: Yup.string().required(),
    //   telefono: Yup.string().required().min(10),
    //   mail: Yup.string().required().email(),
    // }),
  });

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
          name="nombre"
        />
        <TextField
          style={{ width: "50vw", padding: 10 }}
          type="text"
          placeholder="Apellido"
          onChange={handleChange}
          name="apellido"
        />
        <TextField
          style={{ width: "50vw", padding: 10 }}
          type="text"
          placeholder="Documento"
          onChange={handleChange}
          name="documento"
        />
        <TextField
          style={{ width: "50vw", padding: 10 }}
          type="text"
          placeholder="Telefono"
          onChange={handleChange}
          name="telefono"
        />
        <TextField
          style={{ width: "50vw", padding: 10 }}
          type="text"
          placeholder="Mail"
          onChange={handleChange}
          name="mail"
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
