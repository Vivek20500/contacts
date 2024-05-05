import React from "react";
import Card from "./card";
import Header from "./header";
import "./App.css"

function App(){
    return (
        <div className="next">
            <Header />
            <div className="card-cont">
                <Card name="Deadpool" phone="1234 2344 23" img="https://source.unsplash.com/random/?anime"/>
                <Card name="Spiderman" phone="1234 7654 23" img="https://source.unsplash.com/random/?india"/>
                <Card name="Black widow" phone="1234 2884 23" img="https://source.unsplash.com/random/?colour"/>
                <Card name="Black panther" phone="1564 2884 23" img="https://source.unsplash.com/random/?youtube"/>
            </div>
        </div>
    )
}
export default App;