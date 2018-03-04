function data(state, action) {
    switch (action.type) {
        case 'SEARCH_VIDEO':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default data;