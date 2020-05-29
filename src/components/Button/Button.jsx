import React from 'react';
import {
  Link
} from 'react-router-dom';
import {ArrowRightIcon} from '../Icons';

class Button extends React.Component {
  render() {
    const data = this.props.data;
    const handleClick = this.props.handleClick;

    if(data.anchor) {
    	return (
	    	<a onClick={handleClick} className='button' href={data.path}>{data.label}<ArrowRightIcon/></a>
	    );
    } else {
    	return (
	    	<Link className='button' to={data.path}>{data.label}<ArrowRightIcon/></Link>
	    );
    }
  }
}

export default Button;

