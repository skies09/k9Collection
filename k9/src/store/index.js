import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'; 

const rootReducer = combineReducers({
  reducer, 
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
