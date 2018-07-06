import {
  SET_RECIPE_DATA,
  GET_RECIPE_DATA,
  GET_RECIPE_DATA_ERROR,
} from '../actions/action-constants';

const initialState = {
  data: null,
  isLoading: false,
  loadingError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPE_DATA:
      return {
        loadingError: false,
        data: action.data,
        isLoading: false,
      };
    case GET_RECIPE_DATA:
      return {
        data: null,
        isLoading: true,
        loadingError: false,
      };
    case GET_RECIPE_DATA_ERROR:
      return {
        data: null,
        isLoading: false,
        loadingError: true,
      };
    default:
      return state;
  }
};

export default reducer;
