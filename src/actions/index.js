 import {
    CLOSE_MODAL,
    OPEN_MODAL,
    SEARCH_ENTITIES,
    SEARCH_ASYNC_ENTITIES,
    IS_LOADING
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

export function isLoading(value) {
    return {
        type: IS_LOADING,
        payload: {
            value
        }
    }
}

export function searchAsyncEntites(query) {
    return (dispatch) => {
        // Aquí podrías usar cualquiera de estas llamadas a APIs
        // fetch().then(() => {})...
        // XHR
        // TRAE

        dispatch(isLoading(true));

        setTimeout(() => {

            dispatch(isLoading(false));
            dispatch(searchEntites(query))

        }, 5000)
    }
} 