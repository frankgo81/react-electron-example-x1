import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import hub from '../../assets/hub.png';
import Image from './Image';

var defaultStyle = {
    width: '160px',
    // height: '160px',
    position: 'fixed',
    top: '150px',
    left: '290px',
    borderRadius: '10px'
    // color: 'white',
    // backgroundImage: 'url(' + imgUrl + ')',
    // WebkitTransition: 'all', // note the capital 'W' here
    // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

const propTypes = {
    style:PropTypes.object,
    src:PropTypes.string,
};

 

const Hub = (props) => {
    return (
        <Image src={hub}   style={!!props.style ? props.style : defaultStyle}   />           
    );
};

 

Hub.propTypes = propTypes;

export default Hub;