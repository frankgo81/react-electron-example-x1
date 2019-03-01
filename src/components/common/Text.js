import React from 'react';
import PropTypes from 'prop-types';

var defaultStyle = {  //default style
    "position": "fixed",
    "top": "350px",
    "left": "210px",
    "width": "300px",
    "textAlign": "center"
}

const propTypes = {
    style:PropTypes.object,
    text:PropTypes.string,
};


const Text = (props) => {
    return (
        <div>
            <span style={!!props.style ? props.style : defaultStyle}>{props.text}</span>
        </div>
    );
};


Text.propTypes = propTypes;


export default Text;
