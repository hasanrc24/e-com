
const cartReducer = (state, action) => {

    if(action.type === "ADD_TO_CART"){

        const {id, selectColor, quantity, singleProduct} = action.payload;
        let cartProduct;

        cartProduct = {
            id: id+selectColor,
            color: selectColor,
            name: singleProduct.name,
            quantity,
            image: singleProduct.image[0].url,
            price: singleProduct.price,
            stock: singleProduct.stock,
        }
        return {...state, cart: [...state.cart, cartProduct]}
    }

  return state;
}

export default cartReducer