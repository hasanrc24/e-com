
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
    if(action.type === 'REMOVE_ITEM'){
        const id = action.payload;
        let newCart;
        newCart = state.cart.filter((curElem) => {
            return curElem.id !== id;
        })
        return {...state, cart: newCart};
    }
    if(action.type === 'CLEAR_CART'){
        return {...state, cart: []}
    }

  return state;
}

export default cartReducer