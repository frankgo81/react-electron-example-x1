import React from 'react';
 

var defaultStyle = {  //default style
    "position": "fixed",
    "top": "350px",
    "left": "210px",
    "width": "300px",
    "textAlign": "center"
}

 
const Text = (props) => {
    return (
        <div>
            <span style={!!props.style ? props.style : defaultStyle}>{props.text}</span>
        </div>
    );
};

 

export default Text;
