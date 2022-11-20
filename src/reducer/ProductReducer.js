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
        return {...state, loading: false, products: action.payload, featuredProducts: featuredProducts}
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

    return state;
}
export default productReducer;