import React from 'react';
import ContactElementsItem from './ContactElementsItem';

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


