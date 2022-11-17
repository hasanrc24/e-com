import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import productReducer from "../reducer/ProductReducer";


const ProductContext = createContext();
const url = 'https://api.pujakaitem.com/api/products';

const initialState = {
    loading: false,
    error: false,
    products: [],
    featuredProducts: []
}

const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(productReducer, initialState)

    const getProducts = async (url) =>{
            dispatch({type: "LOADING"})
        try {
            const {data} = await axios.get(url);
            dispatch({type: "PRODUCTS", payload: data})
        } catch (error) {
            dispatch({type: "ERROR"})
        }
    }
    
    useEffect(() => {
        getProducts(url);
    }, []);

    return (
        <ProductContext.Provider value={{...state}}>
            {children}
        </ProductContext.Provider>
    );
};

const useProduct = () =>{
    return useContext(ProductContext);
}

export {ContextProvider, useProduct, ProductContext};