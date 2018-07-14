import rp from 'request-promise';
import {
  RECIPE_LOADING,
  ADD_RECIPE_DATA,
  UPDATE_RECIPE_DATA_ERROR,
} from './action-constants';


const addRecipe = ({ content, title }) => (dispatch) => {
  const options = {
    method: 'POST',
    body: {
      content,
      title,
    },
    uri: 'http://localhost:8088/_store',
    json: true,
  };
  dispatch({ type: RECIPE_LOADING });
  return rp(options)
    .then((data) => {
      dispatch({
        type: ADD_RECIPE_DATA,
        data: [{ content, title, id: data.id }],
      });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_RECIPE_DATA_ERROR, err });
    });
};

export default addRecipe;
