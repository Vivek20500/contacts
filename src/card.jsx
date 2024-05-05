import React from "react";
const h=200+"px";
function Card(props){
    return(
        <div className="card">
            <img height={h} width={h} src={props.img} alt={"hello"} ></img>
            <p className="name">{props.name}</p>
            <p className="tel">{props.phone}</p>
        </div>);
}
export default Card;