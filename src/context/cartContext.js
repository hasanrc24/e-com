import { createContext, useContext, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";

const CartContext = createContext();

const initialState = {
    cart: [],
}
const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (id, selectColor, quantity, singleProduct) => {
        return dispatch({type: "ADD_TO_CART", payload: {id, selectColor, quantity, singleProduct}})
    }
    return <CartContext.Provider value={{...state, addToCart}}>
        {children}
    </CartContext.Provider>
};

const useCartContext = () => {
    return useContext(CartContext)
}

export {CartContextProvider, useCartContext, CartContext};