import React from 'react';
import PropTypes from 'prop-types';


var defaultStyle = {  //default style
    "position": "fixed",
    "boxShadow": "rgb(41, 187, 255) 0px -3px 7px 0px inset",
    "background": "linear-gradient(rgb(45, 171, 249) 5%, rgb(6, 136, 250) 100%) rgb(45, 171, 249)",
    "borderRadius": "3px",
    "border": "1px solid rgb(11, 14, 7)",
    "display": "inline-block",
    "cursor": "pointer",
    "color": "rgb(255, 255, 255)",
    "fontFamily": "Arial",
    "fontSize": "15px",
    "padding": "9px 23px",
    "textDecoration": "none",
    "left": "260px",
    "top": "600px"
}

 


const propTypes = {
    className: PropTypes.string,
    style:PropTypes.object,
    onClick:PropTypes.func,
    name:PropTypes.string.isRequired,
};


const Button = (props) => {

    return (
        <button  
         className={props.className}
         style={!!props.style ? props.style : defaultStyle}
         onClick={props.handleClick}
         >
        {props.name}
        </button>
    );
};


Button.propTypes = propTypes;


export default Button;
