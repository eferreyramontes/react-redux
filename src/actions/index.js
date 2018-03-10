 import {
    CLOSE_MODAL,
    OPEN_MODAL,
    SEARCH_ENTITIES,
    SEARCH_ASYNC_ENTITIES
} from '../action-types/index';

export function openModal(mediaId) {
    return {
        'type': OPEN_MODAL,
        'payload': {
            mediaId,
        }
    }
} 

export function closeModal(mediaId) {
    return {
        'type': CLOSE_MODAL,
    }
} 

export function searchEntites(query) {
    return {
        'type': SEARCH_ENTITIES,
        'payload': {
            query,
        }
    }
}

export function searchAsyncEntites(query) {
    return (dispatch) => {
        // Aquí podrías usar cualquiera de estas llamadas a APIs
        // fetch().then(() => {})...
        // XHR
        // TRAE

        setTimeout(() => {
            dispatch(searchEntites(query))
        }, 5000)
        
    }
} 