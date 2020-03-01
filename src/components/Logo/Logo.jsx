import React from 'react';

import logoWhite from '../../assets/images/logo-white.png';
import logoDark from '../../assets/images/logo-dark.png';

class Logo extends React.Component {

  render() {
    return(
      <h1 className="logo">
        <a href="/">
          <img src={this.props.color === "white" ? logoWhite : logoDark} alt="Daguet Photographie"/>
        </a>
      </h1>
    );
  }
}

export default Logo;
