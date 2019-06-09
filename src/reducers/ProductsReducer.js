import productsJSON from '../json/products.json';
import { stringPriceToNumber } from '../utils/utils';

// ACTIONS
const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
const RESET_FILTER_PRODUCTS = 'RESET_FILTER_PRODUCTS';
const ORDER_PRODUCTS = 'ORDER_PRODUCTS';
const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
const IS_LOADING_PRODUCTS = 'IS_LOADING_PRODUCTS';

// INITIAL STATE
const initialState = {
  products: [],
  filters: {},
  categories: {},
  order: {},
  is_loading: false,
  has_error: false
};

export default function(state=initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return Object.assign({}, state, { products: action.data });
    case FILTER_PRODUCTS:
      return Object.assign({}, state, {
        products: action.data,
        filters: action.filters,
        categories: { ...action.category }
      });
    case RESET_FILTER_PRODUCTS:
      return Object.assign({}, state, { products: action.data });
    case ORDER_PRODUCTS:
      return Object.assign({}, state, { products: action.data, order: action.order });
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
  let min_price = parseFloat(parseFloat(minPrice).toFixed(3));
  let max_price = parseFloat(parseFloat(maxPrice).toFixed(3));
  let compare = 0;

  let productsFiltered = products.filter(product => {
    let price = stringPriceToNumber(product.price);
    if((minPrice !== '' || minPrice !== undefined) && (maxPrice !== '' || maxPrice !== undefined)){
      compare = price <= max_price && price >= min_price;
    }else{
      if(minPrice !== undefined && minPrice !== ''){
        compare = price >= min_price;
      }
      if(maxPrice !== undefined && maxPrice !== '' ){
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

function filterProducts(filters, products) {
  if(!filters || Object.keys(filters).length === 0) {
    return products;
  }
  let { min_price, max_price, stock, available } = filters;
  let filteredProducts = [];

  filteredProducts = filterProductByPrice(products, max_price, min_price);
  filteredProducts = filterProductByStock(filteredProducts, stock);
  filteredProducts = filterProductByAvailability(filteredProducts, available);

  return filteredProducts;
}

function orderProducts(property, sortOrder){
  let sortType = 0;
  if(sortOrder === 1) {
    sortType = -1;
  }else if(sortOrder === 2) {
    sortType = 1;
  }else {
    sortType = 0;
  }

  return function (a,b) {
    let result = [];
    if(property === 'price') {
      let firstNumber = stringPriceToNumber(a[property]);
      let secondNumber = stringPriceToNumber(b[property]);
      result = (firstNumber < secondNumber) ? -1 : (firstNumber > secondNumber) ? 1 : 0;
    }else {
      result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    }
    return result * sortType;
  }
}

export function getProductsOrdered(property, sortOrder) {
  return (dispatch, getState) => {
    dispatch(isLoading(true));
    setTimeout(() => {
      let productState = getState().products.products;
      let result = productState.sort(orderProducts(property, sortOrder));
      let newOrder = {
        name: property,
        sort_order: sortOrder
      }
      dispatch({
        type: ORDER_PRODUCTS,
        data: result,
        order: newOrder
      });
      dispatch(isLoading(false));
    }, 1000);
  }
}

export function getProductsFiltered(filters, category) {
  return (dispatch, getState) => {
    dispatch(isLoading(true));
    setTimeout(() => {
      let products = fetchProducts();
      let result = [];
      let { order } = getState().products;
      if(category && category.hasOwnProperty('id')){
        let filteredByCategory = products.filter(product => product.sublevel_id === category.id);
        result = filterProducts(filters, filteredByCategory);
      }else {
        result = filterProducts(filters, products);
      }
      if(order && order.hasOwnProperty('sort_order') && order.sort_order !== 0) {
        result = result.sort(orderProducts(order.name, order.sort_order));
      }

      dispatch({
        type: FILTER_PRODUCTS,
        data: result,
        filters: filters,
        category: category
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

export function getProductsSearched(termSearch) {
  return (dispatch, getState) => {
    dispatch(isLoading(true));
    setTimeout(() => {
      let { filters } = getState().products;
      let { id } = getState().products.categories;
      let { order } = getState().products;
      let products = fetchProducts();
      let result = [];
      if(id){
        let filteredByCategory = products.filter(product => product.sublevel_id === id);
        result = filterProducts(filters, filteredByCategory);
      }else {
        result = filterProducts(filters, products);
      }

      if(order && order.hasOwnProperty('sort_order') && order.sort_order !== 0) {
        result = result.sort(orderProducts(order.name, order.sort_order));
      }

      let productsSearched = result.filter(product => {
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
