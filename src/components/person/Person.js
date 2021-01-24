import React from 'react';
import './Person.css';
const Person = (props) => {
    return (
        <div className="person">
            <h3 className="person__name">NAME : {props.name}</h3>
            <h3 className="person__age">AGE : {props.age}</h3>
            <input className="person__input" type="text" onChange={props.changed} value={props.name} />
            <button onClick={props.deleted} className="person__btn">Delete</button>
        </div>
    )
}

export default Person;
