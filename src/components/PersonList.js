import React from 'react'
import axios from 'axios';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
    
const PersonList = (props) => {
    return (
        <div>
            {props.people.map( (person, i) =>
                <p key={i}> <Link to={`/people/`+ person._id} > {person.title}, {person.price}, {person.description} </Link> </p>
                
            )}
        </div>
    )
}
    
export default PersonList;

