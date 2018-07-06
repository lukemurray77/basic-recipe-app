import {
  SET_RECIPE_DATA,
  GET_RECIPE_DATA,
  GET_RECIPE_DATA_ERROR,
} from '../actions/action-constants';

const initialState = {
  data: [],
  isLoading: false,
  loadingError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPE_DATA:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    case GET_RECIPE_DATA:
      return {
        ...state,
        isLoading: true,
        loadingError: false,
      };
    case GET_RECIPE_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        loadingError: true,
      };
    default:
      return state;
  }
};

export default reducer;
