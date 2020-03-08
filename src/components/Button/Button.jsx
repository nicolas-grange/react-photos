import React from 'react';

class Button extends React.Component {
  render() {
    const data = this.props.data;
    return (
    	<a href={data.path}>{data.label}</a>
    );
  }
}

export default Button;
