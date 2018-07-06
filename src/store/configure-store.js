import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers/root-reducer';

export default () => createStore(
  reducer,
  undefined,
  applyMiddleware(thunk),
);
