import React from 'react';
import {
  withRouter,
  Link
} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
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
              <Link to="/privacy">Privacy</Link>
              <p>@ Nicolas Photography {new Date().getFullYear()}</p>
            </div>
          </Fade>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
