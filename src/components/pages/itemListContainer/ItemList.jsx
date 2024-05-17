import { CenterFocusStrong, WidthFull } from "@mui/icons-material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items, error }) => {
  return (
    <div
      style={{
        width: "95%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "10px",
        margin: "10px",
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
