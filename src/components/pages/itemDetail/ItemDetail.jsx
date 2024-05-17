import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CounterContainer } from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <div className="contenedorDetail">
      <div className="cardContainer">
        <Card className="cardCard">
          <CardMedia
            component={"img"}
            image={item.img}
            title="imagen producto"
            className="imgCard"
          />

          <CardContent>
            <Typography
              className="typo"
              gutterBottom
              variant="h5"
              component="div"
            >
              {item.title}
            </Typography>
            <Typography
              className="typoDescription2"
              variant="body2"
              color="text.secondary"
            >
              {item.description2}
            </Typography>
            <Typography
              className="typoPrecio"
              variant="body2"
              color="text.secondary"
            >
              $ {item.price} .-
            </Typography>
          </CardContent>
        </Card>
      </div>
      <CounterContainer stock={item.stock} onAdd={onAdd} initial={initial} />
    </div>
  );
};
export default ItemDetail;
