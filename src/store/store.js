import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import CollectionsReducer from './reducers/collections';
import UsersReducer from './reducers/users';
import AuthReducer from './reducers/auth';

const rootReducer = combineReducers({
  collections: CollectionsReducer,
  users: UsersReducer,
  auth: AuthReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
