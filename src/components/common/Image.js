import React from 'react';
import PropTypes from 'prop-types';


var defaultStyle = {    
    borderRadius: '10px'   
};

 

const Image = (props) => {
 
    return (
        <img src={props.src}   style={{...props.style, ...defaultStyle}}   />   
    );
};


const propTypes = {
    style: PropTypes.object,
    src: PropTypes.string,
  };

Image.propTypes = propTypes;


export default Image;
