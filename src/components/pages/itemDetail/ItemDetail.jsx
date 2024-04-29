import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CounterContainer } from "../../common/counter/CounterContainer";
import { GiStockpiles } from "react-icons/gi";

const ItemDetail = ({ item, onAdd }) => {
  return (
    <div>
      {
        <Card sx={{ width: 400, margin: 5 }}>
          <CardMedia
            sx={{ height: 400 }}
            image={item.img}
            title="green iguana"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description2}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $ {item.price} .-
            </Typography>
          </CardContent>
        </Card>
      }
      <CounterContainer stock={item.stock} onAdd={onAdd} />
    </div>
  );
};
export default ItemDetail;
