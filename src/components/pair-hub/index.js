import React, { Component } from 'react';
import  HubHand from './HubHand';



class PairHub extends Component {
  
    constructor(props) {   
        super(props);
        
        this.state={
            showContent : false
        };

        setTimeout(() => {  //this is better to initiate...frank
            this.setState({
                showContent: true
            }, ()=>{
                console.log(this.state)
            })
         }, 1000);   
  
    }
    
     
    
   
    render() {
        return (<div>
            
            {this.state.showContent &&   <HubHand/>}
            </div>
            );
    }
}

export default PairHub;
