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
    sum >= 3 ? reset() : setStrikes(sum) 

  }

  const addBall = () => {
    const sum = balls + 1
    sum >= 4 ? reset() : setBalls(sum) 

    
  }
    return (
      <div className="App">
        <h1>Baseball App</h1>
        <h2 data-testid="strikevalue">Strikes: {strikes}</h2>
        <h2 data-testid="ballsvalue">Balls: {balls}</h2>
        <div className= 'btn=container'>
          <button onClick= {addStrike} data-testid="strikeBtn" >Strike</button>
          <button onClick= {addBall} data-testid="ballBtn">Ball</button>
          <button onClick= {addStrike} >Foul</button>
          <button onClick= {reset} >Hit</button>
        </div>
  
      </div>
    )
}
export default App



