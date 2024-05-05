import React from "react";
import Card from "./card";
import Header from "./header";
import "./App.css";
import contact from "./contacts";

function Cardinfo(contact){
    return <Card 
    key={contact.id}
    id={contact.id}
    name={contact.name} 
    info={contact.info}
    pics={contact.imgLk} />
}

function App(){
    return (
        <div className="next">
            <Header />
            <div className="card-cont">
                {contact.map(Cardinfo)}
            </div>
        </div>
    )
}
export default App;