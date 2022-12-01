import { createContext, useContext, useEffect, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";

const CartContext = createContext();

const getCartData = () => {
  let localStorageCart = localStorage.getItem("cartData");
  if (localStorageCart === [] || localStorageCart === null) {
    return [];
  } else {
    return JSON.parse(localStorageCart);
  }
};

const initialState = {
  cart: getCartData(),
  subtotal: "",
  shipping: 5000,
};
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (id, selectColor, quantity, singleProduct) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, selectColor, quantity, singleProduct },
    });
  };
  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(state.cart));
    dispatch({ type: "SUBTOTAL" });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        handleRemoveItem,
        handleClearCart,
        setIncrease,
        setDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContextProvider, useCartContext, CartContext };
