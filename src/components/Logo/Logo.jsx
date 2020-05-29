import React from 'react';
import {
  Link
} from 'react-router-dom';
import logoWhite from '../../assets/images/logo-white.png';
import logoDark from '../../assets/images/logo-dark.png';

class Logo extends React.Component {

  render() {
    const bg = this.props.bg;
    return(
      <h1 className={"logo " + (bg === 'dark' ? 'bg-dark' : '')}>
        <Link to="/">
          <img src={this.props.color === "white" ? logoWhite : logoDark} alt="Nicolas Photography"/>
        </Link>
      </h1>
    );
  }
}

export default Logo;
