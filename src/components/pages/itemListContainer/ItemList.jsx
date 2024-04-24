import { CenterFocusStrong, WidthFull } from "@mui/icons-material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items, error }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {items.map(({ id, title, description, price, img, description2 }) => {
        return (
          <ProductCard
            key={id}
            title={title}
            description={description}
            description2={description2}
            price={price}
            img={img}
            id={id}
          />
        );
      })}

      {error && <h2>{error.message}</h2>}
    </div>
  );
};

export default ItemList;
