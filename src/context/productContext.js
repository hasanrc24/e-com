import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import productReducer from "../reducer/ProductReducer";


const ProductContext = createContext();
const url = 'https://api.pujakaitem.com/api/products';

const initialState = {
    loading: false,
    error: false,
    products: [],
    featuredProducts: [],
    singleProduct: {},
    gridView: true,
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
    
    const getSingleProduct = async (url) =>{
        dispatch({type: "SINGLE_LOADING"});
        try {
            const {data} = await axios.get(url);
            dispatch({type: "SINGLE_PRODUCT", payload: data});
        } catch (error) {
            dispatch({type: "ERROR"});
        }
    }

    const setGridView = () => {
        dispatch({type: "SET_GRID"});
    }
    const setListView = () => {
        dispatch({type: "SET_LIST"});
    }

    useEffect(() => {
        getProducts(url);
    }, []);

    return (
        <ProductContext.Provider value={{...state, getSingleProduct, setGridView, setListView}}>
            {children}
        </ProductContext.Provider>
    );
};

const useProduct = () =>{
    return useContext(ProductContext);
}

export {ContextProvider, useProduct, ProductContext};