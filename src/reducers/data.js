import normalizedData from '../schemas/index.js';
import { fromJS } from 'immutable';

const initialState = fromJS({
    entities: normalizedData.entities,
    categories: normalizedData.result.categories,
    search:[],
})

function data(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_VIDEO':
        let results = [];
        if (action.payload.query) {
            const list = state.data.categories[2].playlist;
            results = list.filter((item) => {
              return item.author.toLowerCase().includes(action.payload.query.toLowerCase())
          })
        }
        return {
            ...state,
            search:results
        };
        default:
        return state;
    }
}

export default data;