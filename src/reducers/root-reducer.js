import {
  SET_RECIPE_DATA,
  RECIPE_LOADING,
  GET_RECIPE_DATA_ERROR,
  ADD_RECIPE_DATA,
  UPDATE_RECIPE_DATA_ERROR,
  DELETE_RECIPE_DATA,
  EDIT_RECIPE_DATA,
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
    case RECIPE_LOADING:
      return {
        ...state,
        isLoading: true,
        loadingError: false,
      };
    case GET_RECIPE_DATA_ERROR:
      return {
        data: null,
        isLoading: false,
        loadingError: true,
      };
    case ADD_RECIPE_DATA: {
      console.log(state);
      const newData = state.data.concat(action.data);
      return {
        data: newData,
        isLoading: false,
      };
    }
    case EDIT_RECIPE_DATA:
      return {
        data: null,
        isLoading: false,
      };
    case DELETE_RECIPE_DATA: {
      console.log(state);
      console.log(state.data);
      const newData = state.data.filter(recipe =>
        recipe.id !== action.id);
      console.log(action.id);
      console.log(newData);
      return {
        isLoading: false,
        data: newData,
      };
    }
    default:
      return state;
  }
};

export default reducer;
