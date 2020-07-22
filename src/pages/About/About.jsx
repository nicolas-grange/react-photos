import React from 'react';
import Logo from '../../components/Logo/Logo';
import PretitleTitle from '../../components/PretitleTitle/PretitleTitle';
import PhotoSection from './components/PhotoSection/PhotoSection';
import photoAbout from '../../assets/images/about/about.png';

const data = {
  pretitleTitle: {
    pretitle: "More",
    title: "About me"
  }
}

class About extends React.Component {

  componentDidMount() {
    window.top.window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="about-container">
        <section className="photo-section-container">
          <Logo color="white" bg="dark"/>
          <PhotoSection photo={photoAbout}/>
        </section>
        <section className="info-section-container">
          <div className="wrapper-intern">
            <div className="info-section-content">
              <PretitleTitle data={data.pretitleTitle}/>
              <h3>My story</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat:</p>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
              </ul>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <h3>My inspirations</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
              </ul>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </section>	
      </div>	
    );
  }
}

export default About;
