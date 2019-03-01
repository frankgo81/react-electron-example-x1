import React, { Component } from 'react';
import icon from '../assets/icon.png';
import { height } from 'window-size';
import { isAbsolute } from 'path';

// console.log(icon)

var imgStyle = {
    width: '60px',
    height: '60px',
    position: 'fixed',
    top:'400px',
    left:'340px',
    borderRadius:'10px'    
    // color: 'white',
    // backgroundImage: 'url(' + imgUrl + ')',
    // WebkitTransition: 'all', // note the capital 'W' here
    // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

const Icon=()=>{
return (
       <img src={icon}  style={imgStyle} />
)
}
export default Icon;
 