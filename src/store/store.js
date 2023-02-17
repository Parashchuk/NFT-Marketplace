import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import CollectionsReducer from './reducers/collections';
import UsersReducer from './reducers/users';

const rootReducer = combineReducers({
  collections: CollectionsReducer,
  users: UsersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
