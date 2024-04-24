import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ title, description, price, img, id, description2 }) => {
  return (
    <Card sx={{ width: 400, margin: 5 }}>
      <CardMedia sx={{ height: 400 }} image={img} title="green iguana" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {price} .-
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small">Ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
