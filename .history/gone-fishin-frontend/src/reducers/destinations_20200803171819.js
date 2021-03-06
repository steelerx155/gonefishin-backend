
export default function destinations(state = {destinations: []}, action) {
    
    switch(action.type){
    case 'FETCH_DESTINATIONS':
    return {destinations: action.payload}
    case 'ADD_ACCOUNT':
        return {...state, destinations: [...state.destinations, actions.payload] }
    
    default:
    return state
    }
}

