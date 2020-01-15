import React from 'react';
import duck from './duck.png';
import './App.css';

class App extends React.Component  {
  state = {
    index: 0,
    messages: ["Splish Splash", "I was taking a bath", "Cheese and quackers"],
    list: [],
    value: "",
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

  sort = (e) => {
    this.setState({ list: this.state.list.sort() })
    this.createListHTML()
  }

  createListHTML = () => {
    const userContainer = document.getElementById('userContainer')
    const userHTML = this.state.list.map(user => {
      return `<li>${user}</li>`
    })
    userContainer.innerHTML = userHTML.join("")
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(array => { 
      let newArray = array.slice(0,5).map(user => { return user.title })
      this.setState({ list: newArray })
      this.createListHTML()
    })
    .then(console.log("mount"))
  }

  componentDidUpdate() {
    // console.log("update: ", this.state.index)
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newList = this.state.list
    newList.push(this.state.value.toString())
    console.log(newList)
    this.setState({
      list: newList, 
      value: ""
    });

    this.createListHTML()

  }

  render(){
    // console.log("render: ", this.state.list)
    return (
      <div className="App">
        <img src={duck} className="duck" alt="duck" />
        {/* <h1 className="header">{this.state.messages[this.state.index]}</h1>
        <div className="button" onContextMenu={(e) => this.change(e)} onClick={(e) => this.change(e)}>Change</div> */}
        <ul id="userContainer">
        </ul>
        <div className="button" onContextMenu={(e) => this.sort(e)} onClick={(e) => this.sort(e)}>Sort</div>
        <br></br>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
          </label>
          <input type="submit" value="Add" />
        </form>
    
     </div>
    );
  } 
}

export default App;
