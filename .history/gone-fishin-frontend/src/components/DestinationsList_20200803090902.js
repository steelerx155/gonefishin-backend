import React from 'react'



const DestinationsList = (props) => {
    return (
        <div>
            {props.destinations.map(dest => <li key={dest.id}>{dest.name} - {dest.city} - {dest.state} - {dest.description}</li>)}
        </div>
    )
}

debugger

export default DestinationsList