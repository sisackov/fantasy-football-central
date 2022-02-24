import {LS_FAVORITES_KEY, LS_LEAGUE_AVG_KEY, LS_TOKEN_KEY} from "../utils/constants";

const initialState = {token: '', favorites: [], leagueAvg: []};

export default function rootReducer(state = initialState, {type, payload} = {}) {
    console.log('rootReducer payload', payload)
    console.log('rootReducer state', state)
    switch (type) {
        case 'token/setToken':
            return handleTokenDispatch(state, payload);
        case 'token/clearToken':
            return handleTokenDispatch(state, '');
        case 'favorites/setFavorites':
            return handleFavoritesDispatch(state, payload);
        case 'favorites/addFavorite':
            return handleFavoritesDispatch(state, state.favorites.concat(payload))
        case 'favorites/removeFavorite':
            return handleFavoritesDispatch(state, state.favorites.filter(items => items !== payload))
        case 'favorites/clearAll':
            return handleFavoritesDispatch(state, []);
        case 'leagueAvg/setAvg':
            return handleLeagueAvgDispatch(state, payload);
        case 'leagueAvg/clearAll':
            return handleLeagueAvgDispatch(state, []);
        default:
            return state;
    }
}

function handleTokenDispatch(state, tokenString) {
    localStorage.setItem(LS_TOKEN_KEY, tokenString);//TODO: move to cookie
    return {
        ...state,
        token: tokenString,
    };
}

function handleFavoritesDispatch(state, favorites) {
    localStorage.setItem(LS_FAVORITES_KEY, JSON.stringify(favorites));
    return {
        ...state,
        favorites,
    };
}

function handleLeagueAvgDispatch(state, leagueAvg) {
    localStorage.setItem(LS_LEAGUE_AVG_KEY, JSON.stringify(leagueAvg));
    return {
        ...state,
        leagueAvg,
    };
}

