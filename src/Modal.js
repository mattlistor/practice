import React from 'react';
import duck from './duck.png';
import './App.css';

class Modal extends React.Component  {
  
  render(){

    return (    
      <>
      <div className="fade"></div>
      <div className="Modal" onClick={() => this.props.closeModal()}> 
      <div class="close" onClick={() => this.props.closeModal()}>X</div>
        <img src={duck} className="duck" alt="duck"/>
        <div>{this.props.message}</div>
      </div>
      </>
    );
  } 
}

export default Modal;
