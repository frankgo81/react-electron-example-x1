import React , {Component} from 'react';
import  Hub from '../common/Hub';
import  AnimateHand from './AnimateHand';
import  AnimateDot from '../common/AnimateDot';
import  Text from '../common/Text';
import  Button from '../common/Button';
import {Link } from "react-router-dom";
 

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
  
    constructor(props) {
      super(props);
          
    this.state={
        showButton: true,
        showDot: false,
    }
    
    }


    showButton=()=>{  //  logMessage = () => {
      
      this.setState(
        updater,
        () => {
          console.log(this.state);
        }
      );
   }  


   
   showDot=()=>{  //  logMessage = () => {
      
    this.setState( 
   {
     showDot:true
   }
    )
 }  

    componentDidMount(){
        setTimeout( 
               this.showDot
          , 1000);
          
    }
    
	render() {
    return (    <div>
       
        <Hub/>
       
 
        { this.state.showButton?<AnimateHand  status={this.state.showButton} />   : null}

        { this.state.showDot?<AnimateDot  status={this.state.showDot} />   : null}
  
  
        <Text style={textStyle} text="Hold and press the button on the HUB for 3 seconds util the status light starts to blink and then move to next step..."></Text>
         <Link  to={'/'}>    <Button  name="Continue to next step..."  />    </Link>

    </div>
      
    );
	}
}
 

 

export default HubHand;