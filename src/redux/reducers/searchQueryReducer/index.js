import { RESET_SEARCH_QUERY, SET_SEARCH_QUERY } from "../../types";

const searchQueryReducer = (state = null, action) => {
  switch(action.type) {
    case SET_SEARCH_QUERY : 
      return action.payload;

    case RESET_SEARCH_QUERY : 
      return null;

    default : 
      return state
  };
};

export default searchQueryReducer;