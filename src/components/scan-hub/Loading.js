import React, { PureComponent } from 'react';
import Loader from 'react-loader-spinner';


export default class Loading extends React.Component {
    //other logic
      render() {
       return(
        <Loader 
          {...this.props}
           type="Watch"
           color="#0099cc"
           height="100"	
           width="100"
        />   
       );
      }
   }
