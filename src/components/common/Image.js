import React from 'react';
import PropTypes from 'prop-types';


var defaultStyle = {    
    borderRadius: '10px'   
};

 
// const propTypes = {
//     style: PropTypes.object,
//     src: PropTypes.string,
//     ref: PropTypes.element,
//   };


const Image = (props) => {
 
    return (
        <img  name='img'  src={props.src}  style={{...props.style, ...defaultStyle}}  {...props} />   
    );
};


// Image.propTypes = propTypes;


export default Image;
