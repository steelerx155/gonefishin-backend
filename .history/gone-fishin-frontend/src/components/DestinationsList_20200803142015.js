import React from 'react'
// import DestinationsContainer from '../containers/DestinationsList'



const DestinationsList = (props) => {
    
    return (
        <div>
            {props.destinations.map(dest => <li key={dest.id}> <h5>Lake Name: </h5>{dest.name} <br></br> City: {dest.city} <br></br> State: {dest.state} <br></br> Description: {dest.description}</li>)}
        </div>
    )
}

export default DestinationsList