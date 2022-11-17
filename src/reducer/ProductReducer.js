const productReducer = (state, action) =>{
    if(action.type === "LOADING"){
        return {...state, loading: true}
    }
    if(action.type === "ERROR"){
        return {...state, loading: false, error: true}
    }
    if(action.type === "PRODUCTS"){
        const featuredProducts = action.payload.filter((products) => {
            return products.featured === true;
        })
        return {...state, loading: false, products: action.payload, featuredProducts: featuredProducts}
    }

    return state;
}
export default productReducer;