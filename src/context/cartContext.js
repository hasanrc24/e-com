import { createContext, useContext, useEffect, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";

const CartContext = createContext();

    let localStorageCart = localStorage.getItem("cartData");

const initialState = {
    cart: JSON.parse(localStorageCart) !== [] && JSON.parse(localStorageCart),
}
const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (id, selectColor, quantity, singleProduct) => {
        dispatch({type: "ADD_TO_CART", payload: {id, selectColor, quantity, singleProduct}})
    }
    const handleRemoveItem = (id) => {
        dispatch({type:"REMOVE_ITEM", payload: id});
    }
    const handleClearCart = () => {
        dispatch({type: "CLEAR_CART"})
    }

    useEffect(() => {
        localStorage.setItem("cartData", JSON.stringify(state.cart))
    }, [state.cart]);
    

    return <CartContext.Provider value={{...state, addToCart, handleRemoveItem, handleClearCart}}>
        {children}
    </CartContext.Provider>
};

const useCartContext = () => {
    return useContext(CartContext)
}

export {CartContextProvider, useCartContext, CartContext};