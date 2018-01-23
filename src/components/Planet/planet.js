import React from 'react';

const planet=(props)=>{
    return <li key={props.planetval} onClick={props.click}>{props.planetval}</li>
}

export default planet;