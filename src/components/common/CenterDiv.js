import React from 'react';
 


var defaultStyle = {  //default style
    "position": "fixed",
    "left": "310px",
    "top": "360px",
    'display': 'block',
    'margin':'4px',
    'padding': '2px'
}

 
 

const  CenterDiv = (props) => {

    return (
        <div  style={defaultStyle}  {...props}>{props.children}</div>  
        
    );
};

 


export default CenterDiv;
