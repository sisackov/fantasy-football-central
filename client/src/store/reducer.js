export const countReducer = function (state, action) {
    console.log('countReducerAction', action);
    console.log('countReducerStatus', state);
    if (state === undefined) {
        state = 0;
    }

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};
