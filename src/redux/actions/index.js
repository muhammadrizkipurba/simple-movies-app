import { RESET_MOVIES_LIST, RESET_SELECTED_MOVIE, SET_MOVIES_LIST, SET_SELECTED_MOVIE } from "../types";

export const setMoviesList = (movies) => {
  return dispatch => {
    dispatch({
      type: SET_MOVIES_LIST,
      payload: movies
    });
  };
};

export const resetMoviesList = () => {
  return dispatch => {
    dispatch({
      type: RESET_MOVIES_LIST
    });
  };
};

export const setSelectedMovie = (movie) => {
  return dispatch => {
    dispatch({
      type: SET_SELECTED_MOVIE,
      payload: movie
    });
  };
};

export const resetSelectedMovie = () => {
  return dispatch => {
    dispatch({
      type: RESET_SELECTED_MOVIE
    });
  };
};