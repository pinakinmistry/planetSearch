import React from 'react';
import classes from './planetDescription.css'

const planetDescription = (props)=>{
    let radius= 0;
    if(props.planetInfo.diameter){
         radius= Math.round(props.planetInfo.diameter/ 100);
    }
    if(radius >1000){
        radius= radius/10;
        radius= radius + 20
    }
    console.log(props.planetInfo);
    return (
        <div className={classes.planetDescription}>
            <div className={classes.col1}>
               <div className={classes.planetImage} style={{width: radius, height: radius}}></div>
            </div>
            <div className={classes.col2}>
                <h2>{props.planetInfo.name}</h2>
                <p><strong>Population</strong> {props.planetInfo.population}</p>
                <p><strong>Diameter</strong> {props.planetInfo.diameter}</p>
                <p><strong>gravity</strong> {props.planetInfo.gravity}</p>
                <p><strong>orbital_period</strong> {props.planetInfo.orbital_period}</p>
                <p><strong>terrain</strong> {props.planetInfo.terrain}</p>
            </div>
        </div>
    )   
}
export default planetDescription;