import React, { Component } from 'react';
import  Icon from '../common/Icon';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class StartApp extends Component {


   
    render() {
        return (

         <Link to={'/PairHub'}><Icon ></Icon></Link>
        );
    }
}

export default StartApp;
