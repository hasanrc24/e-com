import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import productReducer from "../reducer/ProductReducer";

const ProductContext = createContext();
const url = "https://api.pujakaitem.com/api/products";

const initialState = {
  loading: false,
  error: false,
  products: [],
  featuredProducts: [],
  singleProduct: {},
  toFilterProducts: [],
  allCopyProducts: [],
  gridView: true,
  sortBy: "",
  filters: {
    search: "",
    category: "all",
    company: "all",
    colors: "all",
    price: 0,
    maxPrice: 0,
  },
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  console.log(state.filters.price, state.filters.maxPrice);

  const getProducts = async (url) => {
    dispatch({ type: "LOADING" });
    try {
      const { data } = await axios.get(url);
      dispatch({ type: "PRODUCTS", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "LOADING" });
    try {
      const { data } = await axios.get(url);
      dispatch({ type: "SINGLE_PRODUCT", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };

  const setGridView = () => {
    dispatch({ type: "SET_GRID" });
  };
  const setListView = () => {
    dispatch({ type: "SET_LIST" });
  };
  const setSort = (e) => {
    dispatch({ type: "SORT_BY", payload: e.target.value });
  };

  const handleFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    return dispatch({ type: "FILTER", payload: { name, value } });
  };
  const handleClearFilter = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };

  useEffect(() => {
    dispatch({ type: "GET_SORTED" });
    dispatch({ type: "GET_FILTER" });
  }, [state.sortBy, state.filters]);

  useEffect(() => {
    getProducts(url);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        ...state,
        getSingleProduct,
        setGridView,
        setListView,
        setSort,
        handleFilter,
        handleClearFilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  return useContext(ProductContext);
};

export { ContextProvider, useProduct, ProductContext };
