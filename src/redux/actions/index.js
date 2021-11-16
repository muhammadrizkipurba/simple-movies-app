import { API_KEY, Axios } from "../../utils";
import { RESET_MOVIES_LIST, RESET_SEARCH_QUERY, SET_MOVIES_LIST, SET_SEARCH_QUERY } from "../types";

export const searchMovies = async({ query, pageNumber }) => {
  const searchQuery = query.split(' ').join('+');

  const res = await Axios.get(
    `?apikey=${API_KEY}&s=${searchQuery}&page=${pageNumber}`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
    }
  );

  return res.data;
};

export const fetchSingleMovie = async({ id }) => {
  const res = await Axios.get(
    `?apikey=${API_KEY}&i=${id}`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
    }
  );

  return res.data;
};

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

export const setSearchQuery = (movie) => {
  return dispatch => {
    dispatch({
      type: SET_SEARCH_QUERY,
      payload: movie
    });
  };
};

export const resetSearchQuery = () => {
  return dispatch => {
    dispatch({
      type: RESET_SEARCH_QUERY
    });
  };
};