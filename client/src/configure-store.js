import { createStore } from 'redux';
import { countReducer } from './store/reducer';

export const store = createStore(countReducer);
