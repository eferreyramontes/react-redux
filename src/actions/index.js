export function openModal(mediaId) {
    return {
        'type':'OPEN_MODAL',
        'payload': {
        mediaId,
      }
    }
} 

export function closeModal(mediaId) {
    return {
        'type':'CLOSE_MODAL',
    }
} 

export function searchEntites(query) {
    return {
        'type':'SEARCH_ENTITIES',
        'payload': {
            query,
      }
    }
} 