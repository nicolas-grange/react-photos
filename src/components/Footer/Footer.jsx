import React from 'react';
import Fade from 'react-reveal/Fade';
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
          <Fade bottom>
            <SocialNetworks/>
            <div className="privacy-copyright">
              <a href="/privacy">Privacy</a>
              <p>@ Nicolas Photography 2020</p>
            </div>
          </Fade>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
