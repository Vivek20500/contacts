import React from "react";

function Card(props){
    return(
        <div className="card">
            <h1>{props.emoji}</h1>
            <h2>{props.name}</h2>
            <p>{props.meaning}</p>
        </div>);
}
export default Card;