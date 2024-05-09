import { Button, ButtonBase } from "@mui/material";
import "./Counter.css";

const CounterPresentacional = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "50px" }}>
      <Button variant="outlined" onClick={restar}>
        Menos
      </Button>
      <Button variant="text"> {contador} </Button>

      <Button variant="outlined" onClick={sumar}>
        Más
      </Button>
      <Button variant="contained" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default CounterPresentacional;
