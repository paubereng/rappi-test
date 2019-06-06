// ACTIONS
const ADD_PRODUCT = 'ADD_PRODUCT';

// INITIAL STATE
const initialState = {
  cart: [],
  is_loading: false,
  has_error: false
};

export default function(state=initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      let updateCart = [
        ...state.cart,
        action.data
      ];

      return Object.assign({}, state, { cart: updateCart });
    }
    default:
    return state;
  }
}

export function addProductToCart(product) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: ADD_PRODUCT,
        data: product
      });
    }, 100);
  }
}
