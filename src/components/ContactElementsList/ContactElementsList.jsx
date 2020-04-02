import React from 'react';
import {PhoneIcon, EmailIcon, AddressIcon} from '../Icons';

function ContactElementsItem(props) {

  const data = props.data;

	if(data.type === "mail" || data.type === "tel") {
		let hrefAttribute;
		if(data.type === "mail") {
			hrefAttribute = "mailto:";
		}else {
			hrefAttribute = "tel:";
		}
		hrefAttribute += data.value;

		return( 
			<li>
				<a className="contact-element-container" href={hrefAttribute}>
					{data.type === "mail" ? <EmailIcon className="email"/> : <PhoneIcon className="phone"/>}
					<span className="contact-element">
						<span className="title">{data.type === "mail" ? "E-mail" : "Phone"}</span>
						<span>{data.value}</span>
					</span>
				</a>
			</li>
		);
	} else if(data.type === "address") {
		return(
			<li className="contact-element-container">
				<AddressIcon />
				<div className="contact-element">
					<span className="title">Address</span>
					<address>
						{data.address ? data.address : ''} <br/> {data.postalCode ? data.postalCode : ''} <br/> {data.country ? data.country: ''}
					</address>
				</div>
			</li>
		);
	}
  
  return null;
}

class ContactElementsList extends React.Component {

  render() {
  	const contactElements = this.props.data;
    return (
    	<ul className="contact-elements-list">
        <ContactElementsItem data={contactElements.mail}/>
	      <ContactElementsItem data={contactElements.tel}/>
	      <ContactElementsItem data={contactElements.address}/>
      </ul>
    );
  }
}

export default ContactElementsList;


