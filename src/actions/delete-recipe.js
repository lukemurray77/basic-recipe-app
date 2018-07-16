import rp from 'request-promise';
import {
  RECIPE_LOADING,
  DELETE_RECIPE_DATA,
  UPDATE_RECIPE_DATA_ERROR,
} from './action-constants';


const deleteRecipe = id => (dispatch) => {
  const options = {
    method: 'POST',
    body: {
      id,
    },
    uri: 'http://localhost:8088/_delete',
    json: true,
  };
  dispatch({ type: RECIPE_LOADING });
  return rp(options)
    .then(() => {
      dispatch({
        type: DELETE_RECIPE_DATA,
        id,
      });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_RECIPE_DATA_ERROR, err });
    });
};

export default deleteRecipe;
