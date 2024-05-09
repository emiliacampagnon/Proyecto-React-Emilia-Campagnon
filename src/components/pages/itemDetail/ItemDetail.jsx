import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CounterContainer } from "../../common/counter/CounterContainer";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <div style={{ display: "flex" }}>
      {
        <Card sx={{ width: 400, margin: 5 }}>
          <CardMedia
            sx={{ height: 400 }}
            component={"img"}
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
      <CounterContainer stock={item.stock} onAdd={onAdd} initial={initial} />
    </div>
  );
};
export default ItemDetail;
