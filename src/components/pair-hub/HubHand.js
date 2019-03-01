import React , {Component} from 'react';
import PropTypes from 'prop-types';
import  Hub from '../common/Hub';
import  Hand from '../common/Hand';
import  Text from '../common/Text';
import  Button from '../common/Button';
import {Link } from "react-router-dom";

const handStyle={
    "width": "100px",
    "position": "fixed",
    "top": "240px",
    "left": "332px",
    "borderRadius": "10px"
  }


  const textStyle={
    "position": "fixed",
    "top": "450px",
    "left": "210px",
    "width": "300px",
    "textAlign": "center"
  }

  const updater=(prevState, passProps)=>(
        {
            showButton: !prevState.showButton
        }
  );

  class HubHand extends Component {

    state={
        showButton: false,
    }

   showButton=()=>{  //  logMessage = () => {
      this.setState(
        updater,
        () => {
          console.log(this.state);
        }
      );
   }  
  
    componentDidMount(){
        setTimeout( 
              this.showButton
         , 4000);
    }
    
	render() {
    return (    <div>
        <Hub/>
        <Hand style={handStyle} />
        <Text style={textStyle} text="Hold and press the button on the HUB for 3 seconds util the status light starts to blink and then move to next step..."></Text>
        {this.state.showButton &&    <Link to={'/StartApp'}><Button name="Continue to next step..." ></Button></Link> } 

    </div>
      
    );
	}
}
 

 

export default HubHand;