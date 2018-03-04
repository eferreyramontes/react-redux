function data(state, action) {
    switch (action.type) {
        case 'ADD_SONG':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default data;