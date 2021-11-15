import { RESET_MOVIES_LIST, SET_MOVIES_LIST } from "../../types";

const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case SET_MOVIES_LIST : 
      return action.payload;

    case RESET_MOVIES_LIST : 
      return [];
    
    default :
      return state;
  };
};

export default moviesReducer;