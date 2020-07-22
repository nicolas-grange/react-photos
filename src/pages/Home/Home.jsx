import React from 'react';
import { isMobile } from '../../scripts/utils.js';
import Fade from 'react-reveal/Fade';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import LinkButton from '../../components/Button/LinkButton';
import SocialNetworks from '../../components/SocialNetworks/SocialNetworks';
import PretitleTitle from '../../components/PretitleTitle/PretitleTitle';
import ImageTextLink from '../../components/ImageTextLink/ImageTextLink';
import Slider from './components/Slider/Slider';

const data = {
  about: {
    pretitleTitle: {
      pretitle: "More",
      title: "About Me"
    },
    imageTextLink: {
      img: {
        src: require("../../assets/images/home/portrait.png"),
        alt: "Nicolas Photography"
      },
      textLink: {
        title: "Nicolas Grange",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero nunc, placerat quis porttitor venenatis, suscipit ut ex. Ut varius, eros vel gravida varius, magna nunc mollis sem, sit amet lacinia est purus sed justo. Vestibulum a porttitor metus. Ut vitae interdum libero. Aenean vulputate mollis placerat. Maecenas ut volutpat purus. Nulla at porta sem, quis tincidunt enim. Mauris eu diam ligula.",
        link: {
          label: "Read more",
          path: "/about"
        }
      }
    }
  },
  portfolio: {
    pretitleTitle: {
      pretitle: "Discover my",
      title: "Portfolio"
    },
    slider: [
      {
        img: {
          src: require("../../assets/images/portfolio/landscapes/3.png"),
          alt: "Nicolas Photography"
        },
        textLink: {
          title: "All",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero nunc, placerat quis porttitor venenatis, suscipit ut ex. Ut varius, eros vel gravida varius, magna nunc mollis sem, sit amet lacinia est purus sed justo. Vestibulum a porttitor metus. Ut vitae interdum libero. Aenean vulputate mollis placerat. Maecenas ut volutpat purus. Nulla at porta sem, quis tincidunt enim. Mauris eu diam ligula.",
          link: {
            label: "Discover",
            path: "/portfolio"
          }
        }
      },
      {
        img: {
          src: require("../../assets/images/portfolio/portraits/1.png"),
          alt: "Nicolas Photography"
        },
        textLink: {
          title: "Portraits",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero nunc, placerat quis porttitor venenatis, suscipit ut ex. Ut varius, eros vel gravida varius, magna nunc mollis sem, sit amet lacinia est purus sed justo. Vestibulum a porttitor metus. Ut vitae interdum libero. Aenean vulputate mollis placerat. Maecenas ut volutpat purus. Nulla at porta sem, quis tincidunt enim. Mauris eu diam ligula.",
          link: {
            label: "Discover",
            path: "/portfolio/portraits"
          }
        }
      },
      {
        img: {
          src: require("../../assets/images/portfolio/landscapes/1.png"),
          alt: "Nicolas Photography"
        },
        textLink: {
          title: "Landscapes",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero nunc, placerat quis porttitor venenatis, suscipit ut ex. Ut varius, eros vel gravida varius, magna nunc mollis sem, sit amet lacinia est purus sed justo. Vestibulum a porttitor metus. Ut vitae interdum libero. Aenean vulputate mollis placerat. Maecenas ut volutpat purus. Nulla at porta sem, quis tincidunt enim. Mauris eu diam ligula.",
          link: {
            label: "Discover",
            path: "/portfolio/landscapes"
          }
        }
      },
      {
        img: {
          src: require("../../assets/images/portfolio/animals/1.png"),
          alt: "Nicolas Photography"
        },
        textLink: {
          title: "Animals",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero nunc, placerat quis porttitor venenatis, suscipit ut ex. Ut varius, eros vel gravida varius, magna nunc mollis sem, sit amet lacinia est purus sed justo. Vestibulum a porttitor metus. Ut vitae interdum libero. Aenean vulputate mollis placerat. Maecenas ut volutpat purus. Nulla at porta sem, quis tincidunt enim. Mauris eu diam ligula.",
          link: {
            label: "Discover",
            path: "/portfolio/animals"
          }
        }
      }
    ]
  },
  contact: {
    pretitleTitle: {
      pretitle: "Feel free to",
      title: "Contact"
    }
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.updateHeight = this.updateHeight.bind(this);
    this.state = {
      height: 0
    };
  }

  componentDidMount() {
    window.top.window.scrollTo(0,0);
    this.updateHeight();
    if(!isMobile()) {
      window.addEventListener('resize', this.updateHeight);
    }  
  }

  updateHeight() {
    const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.setState({
      height: height
    });
  }

  render() {
    const scrollGif = require("../../assets/gif/scroll.gif");

    return (
      <div className="home-container">
        <section style={{height: this.state.height + 'px'}} className="introduction-section">
          <Fade top>
            <Logo color="white"/>
          </Fade>
          <Fade bottom>
            <div className="infos">
              <p>Photograph</p>
              <h2>Nicolas Grange</h2>
              <Button data={{label: 'Discover', path: '#about-section'}}/>
            </div>
          </Fade>
          <SocialNetworks/>
          <img className="scroll-icon" src={scrollGif} alt="scroll icon"/>
        </section>
        <section id ="about-section" className="about-section">
          <div className="wrapper-intern">
            <PretitleTitle data={data.about.pretitleTitle}/>
            <Fade bottom>
              <ImageTextLink data={data.about.imageTextLink}/>
            </Fade>
          </div>
        </section>
        <section className="portfolio-section">
          <div className="wrapper-intern">
            <PretitleTitle data={data.portfolio.pretitleTitle}/> 
            <Slider data={data.portfolio.slider} />
          </div>
        </section>
        <section className="contact-section">
          <div className="wrapper-intern">
            <PretitleTitle data={data.contact.pretitleTitle}/> 
            <Fade bottom>
              <div className="contact-infos-container">
                <p>Do not hesitate to contact me if:</p>
                <ul>
                  <li>You like my work</li>
                  <li>You want more information</li>
                  <li>You have questions</li>
                </ul>
                <LinkButton className="button" data={{label: 'Contact me', path: '/contact'}}/>
                <span>Contact</span>
              </div>
            </Fade>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
