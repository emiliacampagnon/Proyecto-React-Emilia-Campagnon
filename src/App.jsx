import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";

import { Layout } from "./components/layout/Layout.jsx";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";
import CartContainer from "./components/pages/cart/CartContainer.jsx";

import CartContextProvider from "./context/CartContext.jsx";
import { CheckoutFormik } from "./components/pages/checkoutFormik/CheckoutFormik.jsx";

function App() {
  let nombre = "Viu";

  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />

            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<CheckoutFormik />} />

            <Route path="*" element={<h1>Error 404</h1>} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
