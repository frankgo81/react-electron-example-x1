
import React, {
    Component
} from 'react';
 
import {
    TweenMax
} from 'gsap';
 
 


const dotStyle={
    "height": "6px",
    "width": "6px",
    "backgroundColor": "rgb(41, 187, 255)",
    "borderRadius": "50%",
    "display": "inline-block",
    'position': 'fixed',
    'top': '185px',
    'left':'365px'
  }


class AnimateBlink extends Component {
 
    componentDidMount() {
        const el = this.container;
        // console.log(this.state)
       
function blink() {
	TweenMax.to(el, 0.1, {
		autoAlpha: 0,
		delay: 0.1,
		onComplete: function() {
			TweenMax.to(el, 0.1, {
				autoAlpha: 1,
				delay: 0.1,
				onComplete: blink
			});
		}
	});
}
 blink();
    }
 



    render() {
        return (
             
            <span  ref = {(el)=>{return this.container=el}}  style={dotStyle}  {...this.props}></span> 
        )
    }
}

export default AnimateBlink;