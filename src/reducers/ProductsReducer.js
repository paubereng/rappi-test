import productsJSON from '../json/products.json';

// ACTIONS
const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
const RESET_FILTER_PRODUCTS = 'RESET_FILTER_PRODUCTS';
const ORDER_PRODUCTS = 'ORDER_PRODUCTS';
const FILTER_BY_CATEGORY_PRODUCTS = 'FILTER_BY_CATEGORY_PRODUCTS';
const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
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
    case FILTER_PRODUCTS:
      return Object.assign({}, state, { products: action.data });
    case RESET_FILTER_PRODUCTS:
      return Object.assign({}, state, { products: action.data });
    case ORDER_PRODUCTS:
      return Object.assign({}, state, { products: action.data });
    case FILTER_BY_CATEGORY_PRODUCTS:
      return Object.assign({}, state, { products: action.data });
    case SEARCH_PRODUCTS:
      return Object.assign({}, state, { products: action.data });
    case IS_LOADING_PRODUCTS:
      return Object.assign({}, state, { is_loading: action.data });
    default:
    return state;
  }
}
function fetchProducts() {
  return productsJSON.products;
}
export function getProducts() {
  return (dispatch) => {
    dispatch(isLoading(true));
    setTimeout(() => {
      const result = fetchProducts();
      dispatch({
        type: FETCH_PRODUCTS,
        data: result
      });
      dispatch(isLoading(false));
    }, 1000);
  }
}

function filterProductByPrice(products, maxPrice, minPrice) {
  if((minPrice === '' || minPrice === undefined) && (maxPrice === '' || maxPrice === undefined)) {
    return products;
  }

  let min_price = parseFloat(parseFloat(minPrice).toFixed(2));
  let max_price = parseFloat(parseFloat(maxPrice).toFixed(2));
  let compare = 0;

  let productsFiltered = products.filter(product => {
    let price = parseFloat(product.price.slice(1).replace(/,/g, "."));
    if((min_price !== '' || min_price !== undefined) && (max_price !== '' || max_price !== undefined)){
      compare = price <= max_price && price >= min_price;
    }else{
      if(min_price !== undefined && min_price !== ''){
        compare = price >= min_price;
      }
      if(max_price !== undefined && max_price !== '' ){
        compare= price <= max_price;
      }
    }
    return compare;
  })
  return productsFiltered;
}

function filterProductByStock(products, stock) {
  if(stock === undefined || stock === ''){
    return products;
  }
  let productsFiltered = products.filter(product => {
      return stock <= product.quantity;
  })
  return productsFiltered;
}

function filterProductByAvailability(products, availability) {
  if(availability === 0 || availability === '0') {
    return products;
  }
  let productsFiltered = products.filter(product => {
    if(availability === 1 || availability === '1') {
      return product.available === true;
    }else if (availability === 2 || availability === '2') {
      return product.available === false;
    }
    return false;
  })
  return productsFiltered;
}

function filterProducts(filters) {
  const products = fetchProducts();
  let { min_price, max_price, stock, available } = filters;
  let filteredProducts = [];

  filteredProducts = filterProductByPrice(products, max_price, min_price);
  filteredProducts = filterProductByStock(filteredProducts, stock);
  filteredProducts = filterProductByAvailability(filteredProducts, available);

  return filteredProducts;
}

function order(property){
  let sortOrder = -1;
  // if(property[0] === "-") {
  //     sortOrder = -1;
  //     property = property.substr(1);
  // }
  return function (a,b) {
    let result = [];
    if(property === 'price') {
      let firstNumber = parseFloat(a[property].slice(1).replace(/,/g, "."));
      let secondNumber = parseFloat(b[property].slice(1).replace(/,/g, "."));
      result = (firstNumber < secondNumber) ? -1 : (firstNumber > secondNumber) ? 1 : 0;
    }else {
      result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    }
    return result * sortOrder;
  }
}

export function getProductsOrdered(orderType) {
  return (dispatch, getState) => {
    dispatch(isLoading(true));
    setTimeout(() => {
      let productState = getState().products.products;
      let result = productState.sort(order(orderType));
      dispatch({
        type: ORDER_PRODUCTS,
        data: result
      });
      dispatch(isLoading(false));
    }, 1000);
  }
}

export function getProductsFiltered(filters) {
  return (dispatch) => {
    dispatch(isLoading(true));
    setTimeout(() => {
      let result = filterProducts(filters);
      dispatch({
        type: FILTER_PRODUCTS,
        data: result
      });
      dispatch(isLoading(false));
    }, 1000);
  }
}

export function resetProductsFiltered() {
  return (dispatch) => {
    dispatch(isLoading(true));
    setTimeout(() => {
      let result = fetchProducts();
      dispatch({
        type: RESET_FILTER_PRODUCTS,
        data: result
      });
      dispatch(isLoading(false));
    }, 1000);
  }
}

export function getProductsFilteredByCategory(categoryId) {
  return (dispatch) => {
    dispatch(isLoading(true));
    setTimeout(() => {
      let result = fetchProducts();
      let productsFiltered = result.filter(product => product.sublevel_id === categoryId);
      dispatch({
        type: FILTER_BY_CATEGORY_PRODUCTS,
        data: productsFiltered
      });
      dispatch(isLoading(false));
    }, 1000);
  }
}

export function getProductsSearched(termSearch) {
  return (dispatch, getState) => {
    dispatch(isLoading(true));
    setTimeout(() => {
      let { products } = getState().products;
      let productsSearched = products.filter(product => {
        return product.name.toLowerCase().search(termSearch.toLowerCase()) !== -1;
      });
      dispatch({
        type: SEARCH_PRODUCTS,
        data: productsSearched
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
