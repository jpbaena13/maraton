import { combineReducers } from 'redux';

import userReducer from './userReducer';

const reducers = combineReducers({
  userReducer
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
