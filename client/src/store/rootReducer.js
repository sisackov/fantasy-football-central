import {LS_TOKEN_KEY} from "../utils/constants";


// {type: 'token/setToken', payload: tokenString}
// {type: 'token/clearToken'}
// {type: 'favorites/setFavorites, payload: [ids...]}
// {type: 'favorites/addFavorite', payload: idString}
// {type: 'favorites/removeFavorite', payload: idString}
// {type: 'favorites/clearFavorites'}
// {type: 'leagueAvgs/setAvgs, payload: [{position, avg}...]}
// {type: 'leagueAvgs/clearAvgs'}

const initialState = {token: '', favorites: [], leagueAvgs: []};

export default function rootReducer(state = initialState, {type, payload} = {}) {
    console.log('rootReducer payload', payload)
    console.log('rootReducer state', state)
    switch (type) {
        case 'token/setToken':
            return handleTokenDispatch(state, payload);
        case 'token/clearToken':
            return handleTokenDispatch(state, '');
        case 'favorites/setFavorites':
            return {
                ...state,
                favorites: payload,
            };
        case 'favorites/addFavorite':
            return {
                ...state,
                favorites: state.favorites.push(payload),
            };
        case 'favorites/removeFavorite':
            return {
                ...state,
                favorites: state.favorites.filter(items => items !== payload),
            };
        case 'favorites/clearFavorites':
            return {
                ...state,
                favorites: [],
            };
        case 'leagueAvgs/setAvgs':
            return {
                ...state,
                leagueAvgs: payload,
            };
        case 'leagueAvgs/clearToken':
            return {
                ...state,
                leagueAvgs: [],
            };
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