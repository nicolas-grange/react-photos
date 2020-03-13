import React from 'react';

import logoWhite from '../../assets/images/logo-white.png';
import logoDark from '../../assets/images/logo-dark.png';

class Logo extends React.Component {

  render() {
  	const bg = this.props.bg;
    return(
      <h1 className={"logo " + (bg === 'dark' ? 'bg-dark' : '')}>
        <a href="/">
          <img src={this.props.color === "white" ? logoWhite : logoDark} alt="Daguet Photographie"/>
        </a>
      </h1>
    );
  }
}

export default Logo;
