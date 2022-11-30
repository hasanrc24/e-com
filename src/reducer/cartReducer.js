const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, selectColor, quantity, singleProduct } = action.payload;

    const duplicateProduct = state.cart.find(
      (curElem) => curElem.id === id + selectColor
    );
    if (duplicateProduct) {
      let updatedCart = state?.cart?.map((curItem) => {
        if (curItem.id === id + selectColor) {
          let newQuantity = curItem.quantity + quantity;
          if (newQuantity >= singleProduct.stock) {
            newQuantity = singleProduct.stock;
          }
          return { ...curItem, quantity: newQuantity };
        } else {
          return curItem;
        }
      });
      return { ...state, cart: updatedCart };
    } else {
      let cartProduct = {
        id: id + selectColor,
        color: selectColor,
        name: singleProduct.name,
        quantity,
        image: singleProduct.image[0].url,
        price: singleProduct.price,
        stock: singleProduct.stock,
      };
      return { ...state, cart: [...state.cart, cartProduct] };
    }
  }
  if (action.type === "REMOVE_ITEM") {
    const id = action.payload;
    let newCart;
    newCart = state.cart.filter((curElem) => {
      return curElem.id !== id;
    });
    return { ...state, cart: newCart };
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "SET_INCREASE") {
    let updatedCart = state?.cart?.map((curElem) => {
      if (curElem.id === action.payload) {
        let newQuantity = curElem.quantity + 1;
        if (newQuantity >= curElem.stock) {
          newQuantity = curElem.stock;
        }
        return { ...curElem, quantity: newQuantity };
      } else {
        return { ...curElem };
      }
    });
    return { ...state, cart: updatedCart };
  }
  if (action.type === "SET_DECREASE") {
    let updatedCart = state?.cart?.map((curElem) => {
      if (curElem.id === action.payload) {
        let newQuantity = curElem.quantity - 1;
        if (newQuantity <= 1) {
          newQuantity = 1;
        }
        return { ...curElem, quantity: newQuantity };
      } else {
        return { ...curElem };
      }
    });
    return { ...state, cart: updatedCart };
  }
  if (action.type === "SUBTOTAL") {
    let totalAmount = state?.cart?.reduce((value, curElem) => {
      value = value + curElem.price * curElem.quantity;
      return value;
    }, 0);
    return { ...state, subtotal: totalAmount };
  }

  return state;
};

export default cartReducer;
