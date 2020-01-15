import React from 'react';
import List from './List.js'
import Search from './Search.js'
import duck from './duck.png';
import './App.css';

class App extends React.Component  {
  state = {
    index: 0,
    messages: ["Splish Splash", "I was taking a bath", "Cheese and quackers"],
    value: "",
    filterText: "",
    list:[]
  }

  filterUpdate = (e) => {
    this.setState({ filterText: e.target.value})
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
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(array => { 
      let newArray = array.slice(0,5).map(user => { return user.title })
      this.setState({ list: newArray })
    })
    // .then(console.log("mount"))
  }

  handleSubmit = (list) => {
    this.setState({ list: list });
  }

  render(){
    
    return (
      <div className="App">
        {/* <img src={duck} className="duck" alt="duck" />
        <h1 className="header">{this.state.messages[this.state.index]}</h1>
        <div className="button" onContextMenu={(e) => this.change(e)} onClick={(e) => this.change(e)}>Change</div> */}
        <Search filterText={this.state.filterText} filterUpdate={this.filterUpdate} />
        <List list={this.state.list} filterText={this.state.filterText} handleSubmit={this.handleSubmit} />  
        <div className="button" onContextMenu={(e) => this.sort(e)} onClick={(e) => this.sort(e)}>Sort</div>  
     </div>
    );
  } 
}

export default App;
