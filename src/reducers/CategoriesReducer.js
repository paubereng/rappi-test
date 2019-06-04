import categoriesJSON from '../json/categories.json';

// ACTIONS
const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
const IS_LOADING_CATEGORIES = 'IS_LOADING_CATEGORIES';

// INITIAL STATE
const initialState = {
  categories: [],
  is_loading: false,
  has_error: false
};

export default function(state=initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return Object.assign({}, state, { categories: action.data });
    case IS_LOADING_CATEGORIES:
      return Object.assign({}, state, { is_loading: action.data });
    default:
    return state;
  }
}

export function fetchCategories() {
  return (dispatch) => {
    dispatch(isLoading(true));
    setTimeout(() => {
      dispatch({
        type: FETCH_CATEGORIES,
        data: categoriesJSON.categories
      });
      dispatch(isLoading(false));
    }, 500);
  }
}

function isLoading(isLoading) {
  return (dispatch) => {
    dispatch({
      type: IS_LOADING_CATEGORIES,
      data: isLoading
    });
  }
}
