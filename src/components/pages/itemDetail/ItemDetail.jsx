import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ItemDetail = ({ item }) => {
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
          <CardActions></CardActions>
        </Card>
      }
    </div>
  );
};
export default ItemDetail;
