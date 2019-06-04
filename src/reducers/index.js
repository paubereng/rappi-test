import { combineReducers } from 'redux';
import CategoriesReducer from './CategoriesReducer';
import ProducstReducer from './ProductsReducer';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  products: ProducstReducer
});

export default rootReducer;
