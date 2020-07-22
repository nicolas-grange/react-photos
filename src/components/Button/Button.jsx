import React from 'react';
import {ArrowRightIcon} from '../Icons';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    const data = this.props.data;

    return (
      <button onClick={this.handleClick} className='button' href={data.path}>
        {data.label}
        <ArrowRightIcon/>
      </button>
    );
   
  }
}

export default Button;
