import { combineReducers } from 'redux';
import moviesReducer from "./moviesReducer";
import searchQueryReducer from './searchQueryReducer';

const rootReducer = combineReducers({
  moviesList: moviesReducer,
  searchQuery: searchQueryReducer
});

export default rootReducer;