const productReducer = (state, action) =>{
    if(action.type === "LOADING"){
        return {...state, loading: true}
    }
    if(action.type === "ERROR"){
        return {...state, loading: false, singleLoading: false, error: true}
    }
    if(action.type === "PRODUCTS"){
        const featuredProducts = action.payload.filter((products) => {
            return products.featured === true;
        })
        return {...state, loading: false, products: action.payload, featuredProducts: featuredProducts, toFilterProducts: [...action.payload]}
    }
    if(action.type === "SINGLE_PRODUCT"){
        return {...state, singleLoading: false, singleProduct: action.payload}
    }
    if(action.type === 'SET_GRID'){
        return {...state, gridView: true}
    }
    if(action.type === 'SET_LIST'){
        return {...state, gridView: false}
    }
    if(action.type === "SORT_BY"){
        return {...state, sortBy: action.payload}
    }
    if(action.type === "GET_SORTED"){
        let sortedValue;
        const {toFilterProducts, sortBy} = state;

        function sorting(a,b){
            if(sortBy === "highest"){
                return b.price - a.price;
            }
            if(sortBy === "lowest"){
                return a.price - b.price;
            }
            if(sortBy === "a-z"){
                return a.name.localeCompare(b.name);
            }
            if(sortBy === "z-a"){
                return b.name.localeCompare(a.name);
            }
        }
        sortedValue = [...toFilterProducts].sort(sorting);

        return {...state, toFilterProducts: sortedValue}
    }

    return state;
}
export default productReducer;