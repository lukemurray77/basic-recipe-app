import rp from 'request-promise';

import {
  SET_RECIPE_DATA,
  RECIPE_LOADING,
  GET_RECIPE_DATA_ERROR,
} from './action-constants';


const getData = id => (dispatch) => {
  const options = {
    method: 'POST',
    body: {
      id,
    },
    uri: 'http://localhost:8088/_find',
    json: true,
  };
  dispatch({ type: RECIPE_LOADING });
  return rp(options)
    .then((data) => {
      dispatch({ type: SET_RECIPE_DATA, data });
    })
    .catch((err) => {
      dispatch({ type: GET_RECIPE_DATA_ERROR, err });
    });
};

export default getData;
