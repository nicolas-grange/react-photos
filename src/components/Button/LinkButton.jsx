import React from 'react';
import {
  Link
} from 'react-router-dom';
import {ArrowRightIcon} from '../Icons';

class LinkButton extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <Link className='button' to={data.path}>
        {data.label}
        <ArrowRightIcon/>
      </Link>
    );
    
  }
}

export default LinkButton;
