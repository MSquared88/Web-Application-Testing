import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)
  const reset = () => {
    setBalls(0)
    setStrikes(0)
  }
  
  const addStrike = () => {
    const sum = strikes + 1
    if(sum >= 3){
      reset()
    }else{setStrikes(sum)}
  }

  const addBall = () => {
    const sum = balls + 1
    if(sum >= 4){
      reset()
    }else{setBalls(sum)}
    
  }
  

  

  return (
    <div className="App">
      <h1>Baseball App</h1>
      <h2>Strikes: {strikes}</h2>
      <h2>Balls: {balls}</h2>
      <div className= 'btn=container'>
        <button onClick= {addStrike} >Strike</button>
        <button onClick= {addBall} >Ball</button>
        <button onClick= {addStrike} >Foul</button>
        <button onClick= {reset} >Hit</button>
      </div>

    </div>
  );
}

export default App;
function newFunction(strikes) {
  return strikes + 1;
}

