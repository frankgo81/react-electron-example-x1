import React from 'react';
import PropTypes from 'prop-types';
import icon from '../../assets/icon.png';
 import Image from "./Image";


// console.log(icon)

var defaultStyle = {
  width: '60px',
  height: '60px',
  position: 'fixed',
  top: '400px',
  left: '340px',
  borderRadius: '10px'
  // color: 'white',
  // backgroundImage: 'url(' + imgUrl + ')',
  // WebkitTransition: 'all', // note the capital 'W' here
  // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};


const propTypes = {
  style: PropTypes.object,
  src: PropTypes.string,
};


const Icon = (props) => { 
  
  return (  <Image src={icon}   style={!!props.style ? props.style : defaultStyle}></Image>           
  )
}


Icon.propTypes = propTypes;

export default Icon;