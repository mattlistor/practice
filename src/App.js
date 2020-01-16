import React from 'react';
import List from './List.js'
import Modal from './Modal.js'

import Search from './Search.js'
import duck from './duck.png';
import './App.css';

class App extends React.Component  {
  state = {
    filterText: "",
    list: ["A", "B", "C"],
    modal: true
  }

  filterUpdate = (e) => {
    this.setState({ filterText: e.target.value})
  }

  sort = (e) => {
    this.setState({ list: this.state.list.sort() })
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(array => { 
      let newArray = array.slice(0,15).map(user => { return user.title })
      // this.setState({ list: newArray })
    })
    // this.setState({ list: [] })
  }

  handleSubmit = (list) => {
    this.setState({ list: list });
  }

  delete = (task, index) => {
    console.log(task, index)
    const newList = this.state.list
    newList.splice(index, 1)

    console.log(newList)
    this.setState({ list: newList })

    this.setState({ modal: true })

  }

  render(){
    return (
      <div className="App">
        <div className ="container">
          {/* <img src={duck} className="duck" alt="duck"/> */}
          <h1 className="header">To-Do List</h1>
          <Search filterText={this.state.filterText} filterUpdate={this.filterUpdate} />
          <List list={this.state.list} delete={this.delete} filterText={this.state.filterText} handleSubmit={this.handleSubmit} />  
          {/* <div className="button" id="sort" onContextMenu={(e) => this.sort(e)} onClick={(e) => this.sort(e)}>Sort</div>   */}
        </div>
        { this.state.modal ? <Modal /> : <></> }
     </div>
    );
  } 
}

export default App;
