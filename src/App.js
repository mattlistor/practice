import React from 'react';
import duck from './duck.png';
import './App.css';

class App extends React.Component  {
  state = {
    message: 0
  }

  messages = () => {
    return ["Splish Splash", "I was taking a bath"]
}

  change = () => {
    if(this.state.message === 0) {
      this.setState({
        message: 1
      })
    }
    if(this.state.message === 1) {
      this.setState({
        message: 0
      })
    }
  }
  
  componentDidMount() {
    console.log("turtle")
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <img src={duck} className="duck" alt="duck" />
        <h1 className="header">{this.messages()[this.state.message]}</h1>
        <div className="play" onClick={() => this.change()}>Play</div>
      </div>
    );
  } 
}

export default App;
