import React from "react";

const h=200+"px";
function Card(props){
    return(
        <div className="card">
            <img height={h} width={h} src={props.pics} alt={"hello"} ></img>
            <p className="key">{props.id}</p>
            <p className="name">{props.name}</p>
            <p className="info">{props.info}</p>
        </div>);
}
export default Card;