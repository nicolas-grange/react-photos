import React from 'react';

import {ArrowRightIcon} from '../Icons';

class Button extends React.Component {
  render() {
    const data = this.props.data;
    const handleClick = this.props.handleClick;
    return (
    	<a onClick={handleClick} className='button' href={data.path}>
    		{data.label}<ArrowRightIcon/>
    	</a>
    );
  }
}

export default Button;
