import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { CategoriesReducer } from '../../modules';

export default combineReducers({
  routing: routerReducer,
  categories: CategoriesReducer
});
