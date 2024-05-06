import React from "react";
import Emoji from "./emoji-info";
import Card from "./card";
import Header from "./header";
import "./App.css";

function Cardinfo(Emoji){
    return <Card emoji={Emoji.emoji}
    name={Emoji.name}
    meaning={Emoji.meaning} />
}

function App(){
    return (
        <div className="next">
            <Header />
            <div className="card-cont">
                {Emoji.map(Cardinfo)}
            </div>
        </div>
    )
}
export default App;