import { createStore } from 'redux';
// import { countReducer } from './store/reducer';
import tokenReducer from './store/stateReducer';

export const store = createStore(tokenReducer);
