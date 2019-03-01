import React, {
    Component
} from 'react';
import Hand from '../common/Hand';
import {
    TweenMax
} from 'gsap';
import {
    TransitionGroup
} from 'react-transition-group';


const handStyle={
    "width": "100px",
   "position": "fixed",
   "top": "240px",
   "left": "332px",
   "borderRadius": "10px"
}

 
class AnimateHand extends Component {
 
    state={
        status:  this.props.status
    }

    componentDidMount() {
        const el = this.container;
        console.log(this.state)
   
        TweenMax.fromTo(el, 1.5, {
            opacity: 0
        }, {
            opacity: 1,
            onComplete: function () {
                console.log('ddddddddddddddddddddddddddddddd')

            }
        });
 

    }

    componentWillUnmount () {
        const el = this.container;
        console.log(this.state)
        TweenMax.fromTo(el, 1.5, {
            opacity: 1
        }, {
            opacity: 0,
            onComplete: function () {
                 console.log('xxx')

            }
        });
    }



    render() {
        return (
             
               <div ref = {(el)=>{return this.container=el}} >  <Hand style = {handStyle}/>    </div>   
        )
    }
}

export default AnimateHand;