import { combineReducers } from 'redux';
import moviesReducer from "./moviesReducer";
import selectedMovieReducer from "./selectedMovieReducer";

const rootReducer = combineReducers({
  moviesList: moviesReducer,
  selectedMovie: selectedMovieReducer
});

export default rootReducer;