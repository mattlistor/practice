import React from 'react';
import './App.css';

class List extends React.Component  {

  state = {
    value: ""
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newList = this.props.list
    if(this.state.value.toString() !== ""){
      newList.push(this.state.value.toString())
    }
    this.props.handleSubmit(newList)
  }

  render(){

    const filterText = this.props.filterText 

    const listHTML = this.props.list
      .filter(task => {
        return task.indexOf(filterText) >= 0
      })
      .map(task => {
        return <div className="listItem"><span className="delete" onClick={() => this.props.delete()}>X</span> {task}</div>
      })

    return (    
      <div className="List">   
        <ul id="userContainer">
            {listHTML}
        </ul>
        <br></br>
        <form className="addForm" onSubmit={(e) => this.handleSubmit(e)}>
          <input className="addInput" placeholder="Add more tasks..." type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
          <input className="button" type="submit" value="Add" />
        </form>
      </div>
    );
  } 
}

export default List;
