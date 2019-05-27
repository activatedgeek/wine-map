import { createStore, applyMiddleware } from 'redux';
import { taskMiddleware } from 'react-palm/tasks';

import reducers from './reducers';

const initialState = {};

export default createStore(
  reducers,
  initialState,
  applyMiddleware(taskMiddleware),
);
