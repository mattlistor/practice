import React from 'react';
import './App.css';

class List extends React.Component  {

  state = {
    value: ""
  }

  // createListHTML = () => {
  //   const userContainer = document.getElementById('userContainer')
  //   const userHTML = this.state.list.map(user => {
  //     return `<li>${user}</li>`
  //   })
  //   userContainer.innerHTML = userHTML.join("")
  // }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newList = this.props.list
    newList.push(this.state.value.toString())
    e.target.value = 0
    this.props.handleSubmit(newList)
  }

  render(){

    const filterText = this.props.filterText 

    const listHTML = this.props.list
      .filter(i => {
        return i.indexOf(filterText) >= 0
      })
      .map(i => {
        return <li>{i}</li>
      })

    return (    
      <>   
        <ul id="userContainer">
            {listHTML}
        </ul>
        <br></br>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
          </label>
          <input type="submit" value="Add" />
        </form>
      </>
    );
  } 
}

export default List;
