import React from 'react';

class OpenCloseForm extends React.Component {

  render() {

    const handleClick = this.props.clickOpenClose;
    
    return (
    	<a onClick={handleClick} className="open-close-form">
        <span></span>
      </a>
    );
  }
}

export default OpenCloseForm;
