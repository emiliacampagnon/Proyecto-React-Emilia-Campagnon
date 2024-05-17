import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return { ...elemento, quantity: product.quantity };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };
  const deleteById = (id) => {
    console.log(id);
    const newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
  };
  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const getQuantityById = (id) => {
    let product = cart.find((el) => el.id === id);
    return product?.quantity;
  };
  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);
    return total;
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        deleteById,
        getQuantityById,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
