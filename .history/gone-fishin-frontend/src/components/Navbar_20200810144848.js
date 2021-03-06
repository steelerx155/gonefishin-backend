import React from 'react'
import {Link} from 'react-router-dom'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import DestinationsList from  '../components/DestinationsList';
import DestinationsInput from '../components/DestinationsInput';
import DestinationShow from  '../components/DestinationShow';


const NavBar = (props) => {

    return (
        <div className ="Navbar">
           <NavBar />
           <Switch>
           <NavLink   exact activeClassName="active" path='/destinations/new'  component={DestinationsInput}></NavLink>     
           <NavLink   exact activeClassName="active" path='/destinations/:id'  destinations={this.props.destinations}></NavLink> 
           <NavLink   path='/destinations'      destinations={this.props.destinations}></NavLink>
           </Switch> 
        </div>
    )
}
export default NavBar