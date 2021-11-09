import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
    
const Detail = (props) => {
    const [person, setPerson] = useState({});
    const { id } = useParams();

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id) 
            .then(res => setPerson(res.data))
            .catch(err => console.error(err));
    }, [id]);
    
    return (
        <div>
            <p> title: {person.title}</p>
            <p> price : {person.price}</p>
            <p> description : {person.description}</p>
            <Link to={`/people/`} > Go Back  </Link>
        </div>
    )
}
    
export default Detail;

