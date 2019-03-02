import React, {
  Component
} from 'react';
// import logo from './logo-blue.png';
import './App.css';
import StartApp from "./components/start-app/index"
import PairHub from "./components/pair-hub/index"
import ScanHub from "./components/scan-hub/index"

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

const appStyle = {
  position: 'fixed',
  left: '195px',
  top: '110px',
  height: '670px',
  width: '336px',
  // backgroundColor:'red',
  borderRadius: '30px',

}

class App extends Component {
	render() {
    return ( 
      <Router> 

      <div className="App" style={appStyle} >


      <Route exact path='/' component={StartApp} />

         <Route exact path='/StartApp' component={StartApp} />

<Route exact path='/PairHub' component={PairHub} />
            
<Route exact path='/ScanHub' component={ScanHub} />

      </div>    

      </Router>

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
