import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store/rootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import {LS_TOKEN_KEY} from './utils/constants';

let preloadedState;
const persistedTokenString = localStorage.getItem(LS_TOKEN_KEY);

//TODO: add logger middleware

const loggerMiddleware = storeAPI => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', storeAPI.getState())
    return result
}

const composedEnhancer = composeWithDevTools(
    // EXAMPLE: Add whatever middleware you actually want to use here
    applyMiddleware(loggerMiddleware)
    // other store enhancers if any
)

if (persistedTokenString) {
    preloadedState = {
        [LS_TOKEN_KEY]: persistedTokenString,
    };
}

const store = createStore(rootReducer, preloadedState, composedEnhancer);

export default store;
