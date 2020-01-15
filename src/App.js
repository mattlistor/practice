import React from 'react';
import duck from './duck.png';
import './App.css';

class App extends React.Component  {
  state = {
    index: 0,
    messages: ["Splish Splash", "I was taking a bath", "Cheese and quackers"]
  }

  change = (e) => {
    e.preventDefault()
    // console.log("change")
    let newIndex = this.state.index + 1
    if(newIndex === this.state.messages.length) {
      this.setState({ index: 0 })
    }
    else { 
      this.setState({ index: newIndex })
    }
  }
  
  componentDidMount() {
    const userContainer = document.getElementById('userContainer')

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(array => {
      const userHTML = array.map(user => {
        return `<p>${user.title}</p>`
      })
      console.log(userHTML.toString())
      userContainer.innerHTML = userHTML.join("")
    })

    console.log("mount")
  }

  componentDidUpdate() {
    // console.log("update: ", this.state.index)
  }

  render(){
    // console.log("render")
    return (
      <div className="App">
        <img src={duck} className="duck" alt="duck" />
        <h1 className="header">{this.state.messages[this.state.index]}</h1>
        <div className="button" onContextMenu={(e) => this.change(e)} onClick={(e) => this.change(e)}>Change</div>
        <div id="userContainer">

        </div>
      </div>
    );
  } 
}

export default App;
