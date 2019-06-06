// ACTIONS
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const DELETE_ITEM_PRODUCT = 'DELETE_ITEM_PRODUCT';

// INITIAL STATE
const initialState = {
  cart: [],
  is_loading: false,
  has_error: false
};

export default function(state=initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      let updateCart = [];
      let newProduct = action.data;

      if(productIsAlreadyInCart(state.cart, newProduct)) {
        updateCart = sumSameProductsInCart(state.cart, newProduct);
      }else {
        updateCart = [
          ...state.cart,
          newProduct
        ];
      }

      return Object.assign({}, state, { cart: updateCart });
    }
    case DELETE_PRODUCT: {
      let updateCart = [];
      let deletePrdouct = action.data;
      updateCart = state.cart.filter(product => product.id !== deletePrdouct.id);

      return Object.assign({}, state, { cart: updateCart });
    }
    case DELETE_ITEM_PRODUCT: {
      let updateCart = [];
      let deleteProduct = action.data;
      updateCart = state.cart.map(product => {
        if(product.id === deleteProduct.id) {
          product['cart_quantity'] = product.cart_quantity -1;
        }
        return product;
      })

      return Object.assign({}, state, { cart: updateCart });
    }
    default:
    return state;
  }
}

function productIsAlreadyInCart(cart, newProduct) {
  var result = cart.filter(product => {
    return product.id === newProduct.id
  })
  return result.length !== 0;
}

function sumSameProductsInCart(cart, newProduct){
  let updateCart = cart.map(product => {
    if(product.id === newProduct.id) {
        product['cart_quantity'] = product.cart_quantity + newProduct.cart_quantity;
    }
    return product;
  })
  return updateCart;
}

export function addProductToCart(product) {
  return (dispatch) => {
    let productCart = {
      ...product,
      cart_quantity: 1
    }
    setTimeout(() => {
      dispatch({
        type: ADD_PRODUCT,
        data: productCart
      });
    }, 100);
  }
}

export function deleteProductToCart(product) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: DELETE_PRODUCT,
        data: product
      });
    }, 100);
  }
}

export function deleteItemProductToCart(product) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: DELETE_ITEM_PRODUCT,
        data: product
      });
    }, 100);
  }
}
