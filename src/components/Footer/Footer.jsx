import React from 'react';
import {
  withRouter
} from 'react-router-dom';

import SocialNetworks from '../SocialNetworks/SocialNetworks';

class Footer extends React.Component {

  render() {
    const pathName = this.props.location.pathname;
    return(
      <footer className={'footer ' + (pathName === "/contact" ? "contact " : '') + (pathName === "/about" ? "about " : '') + (pathName === "/" ? "home " : '') + (pathName === "/privacy" ? "privacy " : '')}>
        <div className="wrapper-intern">
          <SocialNetworks/>
          <div className="privacy-copyright">
            <a href="/privacy">Privacy</a>
            <p>@ Daguet Photographie 2020</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
