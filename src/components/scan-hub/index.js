
import React, { Component } from 'react';
import  Loading from './Loading';
import CenterDiv from '../common/CenterDiv';
import Text from '../common/Text';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  

import Modal from "../common/Modal";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  

const textStyle={
 position: 'fixed',
 top:'260px',
 left:'260px'

}

export default class ScanHub extends React.Component {
   
    state={
        showModal: false,
    }

    
  onOpenModal = () => {
    this.setState({ showModal: true });
  };

  onCloseModal = () => {
      
    this.setState({ showModal: false });
    window.location.reload();
  };


     componentDidMount() {
         setTimeout(()=>{
            this.setState({
              showModal: true
            }) 
         }, 2000)
     }
     
     
      render() {
     const {showModal} =this.state;

       return(             
                 showModal?  
                    
                    <CenterDiv >
                     
                     <Modal show={this.state.showModal} handleClose={this.onCloseModal}>
          <p>Tap to connect with the hub.</p>
          <p>SB3040949922HUB    <Link to='/'><button>Connect</button></Link></p>
        </Modal>
               </CenterDiv>

               :

               <CenterDiv >
               <Text style={textStyle} text={'Connecting now...please wait...'}/>
                <Loading  /> </CenterDiv> 
               
       );
      }
   }