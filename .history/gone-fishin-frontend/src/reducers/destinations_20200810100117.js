
export default function destinations(state = {destinations: []}, action) {
  let destinations = state.destinations.map(destination => {
    if (destination.id === action.payload.id) {
     return action.payload
    } else {
      return destination
    }
  }) 

  switch(action.type){
    case 'FETCH_DESTINATIONS':
      return {destinations: action.payload}
    case 'ADD_FEATURE':
      let destinations = state.destinations.map(destination => {
        if (destination.id === action.payload.id) {
         return action.payload
        } else {
          return destination
        }
      }) 
      return {...state, destinations: destinations}
      case 'DELETE_FEATURE':
        destinations 
          return {...state, destinations: destinations}
      case 'EDIT_DESTINATION':
        let destinationsss = state.destinations.map(destination => {
            if (destination.id === action.payload.id) {
             return action.payload
            } else {
              return destination
            }
          }) 
          return {...state, destinations: destinationsss}    

          case 'ADD_COMMENT':
            let destinationForComments = state.destinations.map(destination => {
              if (destination.id === action.payload.id) {
               return action.payload
              } else {
                return destination
              }
            }) 
            return {...state, destinations: destinationForComments}
      
    default:
    return state
    }
}

