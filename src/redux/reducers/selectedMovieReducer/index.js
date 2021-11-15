import { RESET_SELECTED_MOVIE, SET_SELECTED_MOVIE } from "../../types";

const selectedMovieReducer = (state = null, action) => {
  switch(action.type) {
    case SET_SELECTED_MOVIE : 
      return action.payload;

    case RESET_SELECTED_MOVIE : 
      return null;

    default : 
      return state
  };
};

export default selectedMovieReducer;