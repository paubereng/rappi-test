import productsJSON from '../json/products.json';

// ACTIONS
const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const IS_LOADING_PRODUCTS = 'IS_LOADING_PRODUCTS';

// INITIAL STATE
const initialState = {
  products: [],
  is_loading: false,
  has_error: false
};

export default function(state=initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return Object.assign({}, state, { products: action.data });
    case IS_LOADING_PRODUCTS:
      return Object.assign({}, state, { is_loading: action.data });
    default:
    return state;
  }
}

export function fetchProducts() {
  return (dispatch) => {
    dispatch(isLoading(true));
    setTimeout(() => {
      dispatch({
        type: FETCH_PRODUCTS,
        data: productsJSON.products
      });
      dispatch(isLoading(false));
    }, 1000);
  }
}

function isLoading(isLoading) {
  return (dispatch) => {
    dispatch({
      type: IS_LOADING_PRODUCTS,
      data: isLoading
    });
  }
}
