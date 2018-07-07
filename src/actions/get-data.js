import rp from 'request-promise';
import {
  SET_RECIPE_DATA,
  GET_RECIPE_DATA,
  GET_RECIPE_DATA_ERROR,
} from './action-constants';


const getData = id => (dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      body: {
        id,
      },
    }),
    uri: 'http://localhost:8088/_find',
  };
  dispatch({ type: GET_RECIPE_DATA });
  return rp(options)
    .then((data) => {
      dispatch({ type: SET_RECIPE_DATA, data: JSON.parse(data) });
    })
    .catch((err) => {
      dispatch({ type: GET_RECIPE_DATA_ERROR, err });
    });
};

export default getData;
