import { combineReducers } from 'redux';
import CategoriesReducer from './CategoriesReducer';
import ProducstReducer from './ProductsReducer';
import CartReducer from './CartReducer';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  products: ProducstReducer,
  cart: CartReducer
});

export default rootReducer;
