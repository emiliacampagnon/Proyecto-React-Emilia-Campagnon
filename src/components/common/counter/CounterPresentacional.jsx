import { Button, ButtonBase } from "@mui/material";
import "./Counter.css";
import { ColorizeSharp } from "@mui/icons-material";

const CounterPresentacional = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "50px" }}>
      <Button
        style={{ color: "grey", borderColor: "grey" }}
        variant="outlined"
        onClick={restar}
      >
        Menos
      </Button>
      <Button
        style={{
          color: "grey",
          borderColor: "#f7f7f7",
          borderRadius: "20px",
          margin: "50px",
        }}
        variant="text"
      >
        {" "}
        {contador}{" "}
      </Button>

      <Button
        style={{ color: "grey", borderColor: "grey" }}
        variant="outlined"
        onClick={sumar}
      >
        Más
      </Button>
      <Button
        style={{ color: "white", borderColor: "grey", backgroundColor: "grey" }}
        variant="contained"
        onClick={() => onAdd(contador)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default CounterPresentacional;
