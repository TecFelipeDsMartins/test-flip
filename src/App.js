import React, {useState} from "react";

import "./style.css";
  
export default function App() {
const card = {
  transform: "rotateY(0deg)"
}
const [flipCard, setFlipCard] = useState({card})

const setFlipCard = (card) => {
 // flipCard.transform = "rotateY(180deg)"}}
 card.transform = "rotateY(180deg)"
}
1

return (
    <div>
      <h1>Card Flip with Text</h1>
      <h3>Hover over the image below:</h3>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front" onClick={setFlipCard}>
            <img src="img_avatar.png" alt="Avatar" style={{width: 300, height:300}}/>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
          </div>
        </div>
      </div>
  </div>
  );
}
