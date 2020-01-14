import React from 'react';
import duck from './duck.png';
import './App.css';

class App extends React.Component  {
  render(){
    return (
      <div className="App">
        <img src={duck} className="duck" alt="duck" />
        <h1 className="header">Splish Splash</h1>
        <div className="play">Play</div>
      </div>
    );
  } 
}

export default App;
