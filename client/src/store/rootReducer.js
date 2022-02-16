// {type: 'token/setToken', payload: tokenString}
// {type: 'token/clearToken'}
// {type: 'favorites/setFavorites, payload: [ids...]}
// {type: 'favorites/addFavorite', payload: idString}
// {type: 'favorites/removeFavorite', payload: idString}
// {type: 'favorites/clearFavorites'}
// {type: 'leagueAvgs/setAvgs, payload: [{position, avg}...]}
// {type: 'leagueAvgs/clearAvgs'}

const initialState = { token: '', favorites: [], leagueAvg: [] };

export default function appReducer(
    state = initialState,
    { type, payload } = {}
) {
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

// function tokenReducer(state = initialState, { type, payload } = {}) {
//     console.log('tokenReducerAction', { type, payload });

//     // Check to see if the reducer cares about this action
//     if (type === 'SET_TOKEN') {
//         // If so, make a copy of `state`
//         return {
//             ...state,
//             // and update the copy with the new value
//             token: payload,
//         };
//     } else if (type === 'CLEAR_TOKEN') {
//         // If not, return the original state
//         return {
//             ...state,
//             token: '',
//         };
//     }
//     console.log('tokenReducerState', state);
//     // otherwise return the existing state unchanged
//     return state;
// }

// export default tokenReducer;
