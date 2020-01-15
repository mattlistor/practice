import React from 'react';
import './App.css';

class Search extends React.Component  {

  render(){
    return (       
        <form className="filterForm" >
          <input
            className="filterInput" 
            type="text"
            value={this.props.filterText} 
            placeholder="Search..."
            onChange={(e) => this.props.filterUpdate(e)}
          />
        </form>
    );
  } 
}

export default Search;
