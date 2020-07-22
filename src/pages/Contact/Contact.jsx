import React from 'react';
import Logo from '../../components/Logo/Logo';
import PretitleTitle from '../../components/PretitleTitle/PretitleTitle';
import ContactElementsList from './components/ContactElementsList/ContactElementsList';
import GoogleMap from './components/GoogleMap/GoogleMap';
import ContactForm from './components/ContactForm/ContactForm';

const data = {
  pretitleTitle: {
    pretitle: "Feel free to",
    title: "Contact"
  },
  contactElementsList: {
    mail: {
      type: "mail",
      value: "ngrange@yahoo.fr",
    },
    tel: {
      type: "tel",
      value: "06 23 27 14 63"
    },
    address: {
      type: "address",
      address: "22 rue Saint Lubin",
      postalCode: "28200 Châteaudun",
      country: "France"
    }
  },
  map: {
    center: {
      smallScreen: {
        lat: 47.3850462,
        lng: 0.6749002
      },
      fullScreen: {
        lat: 47.3750462, 
        lng: 0.6749002
      }
    },
    marker: {
      lat: 47.3850462, 
      lng: 0.6749002
    }
  }
}

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.updateResize = this.updateResize.bind(this);
    this.state = {
      colorLogo: 'dark',
      paddingPretitleTitle: '50px'
    };
  }

  componentDidMount() {
    window.top.window.scrollTo(0,0);
    window.addEventListener("resize", this.updateResize);
    this.updateResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateResize);
  }

  updateResize() {
    this.updateColorLogo();
    this.updatePretitleTitle();
  }

  updatePretitleTitle() {
    const height = window.innerHeight;
    let padding = '';
    if(height < 670 && window.matchMedia("only screen and (min-width : 1024px)").matches) {
      padding = "20px"
    } 
    this.setState({
      paddingPretitleTitle: padding
    });
  }

  updateColorLogo() {
    let colorLogo = 'black';
    if(window.matchMedia("only screen and (min-width : 1024px)").matches) {
      colorLogo = 'white';
    }
    this.setState({
      colorLogo: colorLogo
    });
  }

  render() {
    const stylePretitleTitle = {
      paddingTop: this.state.paddingPretitleTitle,
      paddingBottom: this.state.paddingPretitleTitle
    }

    return (
      <div>
        <Logo color={this.state.colorLogo}/>
        <div className="contact-container">
          <section className="contact-info">
            <div className="wrapper-intern">
              <PretitleTitle customStyle={stylePretitleTitle} data={data.pretitleTitle}/>
              <ContactElementsList data={data.contactElementsList}/>
            </div>
          </section>
          <section className="map-container">
            <GoogleMap className="map" data={data.map}/>
            <ContactForm />
          </section>
        </div>
      </div>
    );
  }
}

export default Contact;
