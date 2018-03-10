import normalizedData from '../schemas/index.js';
import { fromJS } from 'immutable';

const initialState = fromJS({
    entities: normalizedData.entities,
    categories: normalizedData.result.categories,
    search:'',
})

function data(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_ENTITIES': {
            return state.set('search',action.payload.query);
        }
        default:
        return state;
    }
}

export default data;