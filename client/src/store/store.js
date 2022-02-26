import { createStore } from 'redux';
import rootReducer from './rootReducer';
// import { composeWithDevTools } from '@redux-devtools/extension';
import {
    LS_FAVORITES_KEY,
    LS_LEAGUE_AVG_KEY,
    LS_TOKEN_KEY,
} from '../utils/constants';

let preloadedState;
const persistedTokenString = localStorage.getItem(LS_TOKEN_KEY);
const persistedFavorites = localStorage.getItem(LS_FAVORITES_KEY);
const persistedLeagueAvg = localStorage.getItem(LS_LEAGUE_AVG_KEY);

//TODO: add logger middleware

// const loggerMiddleware = (storeAPI) => (next) => (action) => {
//     console.log('dispatching', action);
//     let result = next(action);
//     console.log('next state', storeAPI.getState());
//     return result;
// };
//
// const composedEnhancer = composeWithDevTools(
//     // EXAMPLE: Add whatever middleware you actually want to use here
//     applyMiddleware(loggerMiddleware)
//     // other store enhancers if any
// );

if (persistedTokenString) {
    preloadedState = {
        [LS_TOKEN_KEY]: persistedTokenString,
        [LS_FAVORITES_KEY]: persistedFavorites
            ? JSON.parse(persistedFavorites)
            : [],
        [LS_LEAGUE_AVG_KEY]: persistedLeagueAvg
            ? JSON.parse(persistedLeagueAvg)
            : [],
    };
}

const store = createStore(rootReducer, preloadedState);

export default store;
