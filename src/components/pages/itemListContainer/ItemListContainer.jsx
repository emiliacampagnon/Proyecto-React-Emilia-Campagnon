import { useState } from "react";
import { products } from "../../../productsMock";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { Skeleton } from "@mui/material";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let productsFiltered = products.filter(
      (product) => product.category === name
    );

    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        setTimeout(() => {
          resolve(name ? productsFiltered : products);
        }, 3000);
      } else {
        reject({ status: 400, message: "no estas autorizado" });
      }
    });

    getProducts.then((res) => setItems(res)).catch((error) => setError(error));
  }, [name]);

  // if (items.length === 0) {
  //   return (
  //     <div>
  //       <div>
  //         <Skeleton variant="rectangular" width={210} height={118} />
  //       </div>
  //     </div>
  //   );
  // }

  // return (
  //   <>
  //     <h1>Bienvendios</h1>

  //     {items.length > 0 ? (
  //       <ItemList items={items} error={error} />
  //     ) : (
  //       <BounceLoader color="steelblue" size={50} />
  //     )}
  //   </>
  // );
  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
