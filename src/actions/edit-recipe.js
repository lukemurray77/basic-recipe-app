import rp from 'request-promise';
import { push } from 'connected-react-router';
import {
  RECIPE_LOADING,
  EDIT_RECIPE_DATA,
  UPDATE_RECIPE_DATA_ERROR,
} from './action-constants';


const editRecipe = ({ content, title, id }, isView) => (dispatch) => {
  const options = {
    method: 'POST',
    body: {
      content,
      title,
      id,
    },
    uri: 'http://localhost:8088/_store',
    json: true,
  };
  dispatch({ type: RECIPE_LOADING });
  return rp(options)
    .then(() => {
      dispatch({
        type: EDIT_RECIPE_DATA,
        newRecipe: { content, title, id },
      });
      const path = isView === 'true' ? `/view/${id}/true` : '/';
      dispatch(push(path));
    })
    .catch((err) => {
      dispatch({ type: UPDATE_RECIPE_DATA_ERROR, err });
    });
};

export default editRecipe;
