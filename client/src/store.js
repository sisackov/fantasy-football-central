import {createStore} from 'redux';
import rootReducer from './store/rootReducer';
import {LS_TOKEN_KEY} from './utils/constants';

let preloadedState;
const persistedTokenString = localStorage.getItem(LS_TOKEN_KEY);

if (persistedTokenString) {
    preloadedState = {
        [LS_TOKEN_KEY]: persistedTokenString,
    };
}
console.log(preloadedState)

const store = createStore(rootReducer, preloadedState);

export default store;
