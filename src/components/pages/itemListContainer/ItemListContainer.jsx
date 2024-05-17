import { useState } from "react";
import { products } from "../../../productsMock";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";

import { db } from "../../../firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }
    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(newArray);
    });
  }, [name]);

  // const addDocsProducts = () => {
  //   let productsCollection = collection(db, "products");
  //   products.forEach((product) => addDoc(productsCollection, product));
  // };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {items.length > 0 ? (
          <ItemList items={items} error={error} />
        ) : (
          <BounceLoader color="lightgrey" size={100} />
        )}
      </div>

      {/* <button onClick={addDocsProducts}>Agregar doc</button> */}
    </>
  );
  //return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
