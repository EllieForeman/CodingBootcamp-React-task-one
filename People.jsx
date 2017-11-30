import React from "react";


// wrap in a <div> so there's only one top-level element
const People = props => (
    <ul>
        { props.names.map(i => (
            <li key={ i }>
                { i }
            </li>
        ))}
    </ul>
);



export default People;