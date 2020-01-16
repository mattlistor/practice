import React from 'react';
import duck from './duck.png';
import './App.css';

class Modal extends React.Component  {

  state = {
    message: ""
  }

  
  render(){

    return (    
      <>
      {/* <div className="fade"></div> */}
      <div className="Modal"> 
      
        <img src={duck} className="duck" alt="duck"/>

        <div>Modal!</div>
      </div>
      </>
    );
  } 
}

export default Modal;
