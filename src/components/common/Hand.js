import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import hand from '../../assets/hand.png';
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

 

const Hand = (props) => {
    return (
        <Image src={hand}   style={!!props.style ? props.style : defaultStyle}   />           
    );
};

 

Hand.propTypes = propTypes;

export default Hand;