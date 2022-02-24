// {type: 'token/setToken', payload: tokenString}
// {type: 'token/clearToken'}
// {type: 'favorites/setFavorites, payload: [ids...]}
// {type: 'favorites/addFavorite', payload: idString}
// {type: 'favorites/removeFavorite', payload: idString}
// {type: 'favorites/clearFavorites'}
// {type: 'leagueAvgs/setAvgs, payload: [{position, avg}...]}
// {type: 'leagueAvgs/clearAvgs'}

const initialState = {token: '', favorites: [], leagueAvgs: []};


export default function appReducer(state = initialState, action) {
    return {
        token: tokenReducer(state.token, action),
        favorites: favoritesReducer(state.favorites, action),
        leagueAvgs: leagueAvgsReducer(state.leagueAvgs, action),
    }
}


export function tokenReducer(state = initialState, {type, payload} = {}) {
    switch (type) {
        case 'token/setToken':
            return {
                ...state,
                token: payload,
            };
        case 'token/clearToken':
            return {
                ...state,
                token: '',
            };
        default:
            return state;
    }
}

export function favoritesReducer(state = initialState, {type, payload} = {}) {
    switch (type) {
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
        default:
            return state;
    }
}


export function leagueAvgsReducer(state = initialState, {type, payload} = {}) {
    switch (type) {
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