import React, { Component } from 'react';
// import logo from './logo-blue.png';
import './App.css';
import Icon from "./views/Icon"

const appStyle={
  position: 'fixed',
  left:'195px',
  top:'81px',
  height:'700px',
  width:'336px',
  // backgroundColor:'red',
  borderRadius:'30px'    
}

class App extends Component {
	render() {
    return ( 
      <div className="App" style={appStyle} >

             <Icon/>
      
      
      </div>    
    );
	}
}

export default App;


// const { app } = window.require('electron').remote;

//  <div className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />

//   </div> */}
//   <p className="App-intro">
//      <b> Release 0.2.7 </b>
//     Version: {app.getVersion()} }
//   </p>
