import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import CollectionsReducer from './reducers/collections';

const rootReducer = combineReducers({
  collections: CollectionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
