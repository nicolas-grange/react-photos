import React from 'react';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import PretitleTitle from '../PretitleTitle/PretitleTitle';
import ImageTextLink from '../ImageTextLink/ImageTextLink';
import Slider from '../Slider/Slider';

const data = {
	about: {
    pretitleTitle: {
      pretitle: "More",
      title: "About Me"
    },
    imageTextLink: {
      img: {
        src: require("../../assets/images/about/about.jpg"),
        alt: "Daguet Photographie"
      },
      textLink: {
        title: "Margaux Daguet",
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
          src: require("../../assets/images/portfolio/landscapes/1.jpg"),
          alt: "Daguet Photographie"
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
          src: require("../../assets/images/portfolio/portraits/1.jpg"),
          alt: "Daguet Photographie"
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
          src: require("../../assets/images/portfolio/landscapes/2.jpg"),
          alt: "Daguet Photographie"
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
          src: require("../../assets/images/portfolio/animals/2.jpg"),
          alt: "Daguet Photographie"
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
    this.handleClickDiscover = this.handleClickDiscover.bind(this);
  }

  handleClickDiscover(e) {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    const scrollGif = require("../../assets/gif/scroll.gif");
    return (
    	<div className="home-container">

	    	<section className="introduction-section">
	    		<Logo color="white"/>
          <div className="infos">
            <p>Photograph</p>
            <h2>Margaux Daguet</h2>
            <Button handleClick={this.handleClickDiscover} data={{label: 'Discover', path: '#about-section'}}/>
          </div>
          <img className="scroll-icon" src={scrollGif} alt="scroll icon"/>
          <SocialNetworks/>
	    	</section>
	    	<section id ="about-section" className="about-section">
          <div className="wrapper-intern">
            <PretitleTitle data={data.about.pretitleTitle}/>
            <ImageTextLink data={data.about.imageTextLink}/>
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
            <div className="contact-infos-container">
              <p>Do not hesitate to contact me if:</p>
              <ul>
                <li>You like my work</li>
                <li>You want more information</li>
                <li>You have questions</li>
              </ul>
              <Button className="button" data={{label: 'Contact me', path: '/contact'}}/>
              <span>Contact</span>
            </div>
          </div>
        </section>
    	</div>
    );
  }
}

export default Home;
