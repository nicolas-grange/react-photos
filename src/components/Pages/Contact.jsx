import React from 'react';

import PretitleTitle from '../PretitleTitle/PretitleTitle';
import ContactElementsList from '../ContactElementsList/ContactElementsList';
import GoogleMap from '../GoogleMap/GoogleMap';
import ContactForm from '../ContactForm/ContactForm';

import Logo from '../Logo/Logo';



const data = {
	pretitleTitle: {
		pretitle: "Fell free to",
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
	}, 
	form: {
		name:  {
	    name: "name",
	    label: "Name",
	    item: {
	      kind: "input",
	      type: "text"
	    }
	  },
	  mail: {
	    name: "email",
	    label: "E-mail",
	    item: {
	      kind: "input",
	      type: "email"
	    }
	  },
	  subject: {
	    name: "subject",
	    label: "Subject",
	    item: {
	      kind: "input",
	      type: "text"
	    }
	  },
	  message: {
	    name: "message",
	    label: "Tap your message",
	    item: {
	      kind: "textarea"
	    }
	  }
	}
}

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.updateSizeWindow = this.updateSizeWindow.bind(this);
		this.state = {
			colorLogo: "dark"
		};
	}

	componentDidMount() {
    window.addEventListener('resize', this.updateSizeWindow);
    this.updateSizeWindow();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSizeWindow);
  }

  updateSizeWindow() {
  	if(window.matchMedia("only screen and (min-width : 1024px)").matches) { // tablet-landscape
      this.setState({
      	colorLogo: "white"
      });
    } else {
    	this.setState({
      	colorLogo: "dark"
      });
    }
  }

  render() {
    const colorLogo = this.state.colorLogo;

    return (
    	<div className="contact-container">
    		<Logo color={colorLogo}/>
	    	<section className="contact-info wrapper-container">
	    		<PretitleTitle data={data.pretitleTitle}/>
	    		<ContactElementsList data={data.contactElementsList}/>
	    	</section>
	    	<section className="map-container">
	    		<GoogleMap className="map" data={data.map}/>
	    		<ContactForm data={data.form}/>
	    	</section>
    	</div>
    );
  }
}

export default Contact;
