import React from 'react';
import OpenCloseForm from './OpenCloseForm';
import FormElement from '../FormElement/FormElement';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {
      visible: true
    };
  }

  handleOpenClose() {
    this.setState((prevState, props) => ({
      visible: prevState.visible === true ? false : true
    }));
  }

  render() {
    const formItems = this.props.data;
    const visible = this.state.visible;


    return (
    	<div className={"contact-form wrapper-container " + (visible === true ? 'visible' : 'invisible')}>
        <form>
          <FormElement data={formItems.name}/>
          <FormElement data={formItems.mail}/>
          <FormElement data={formItems.subject}/>
          <FormElement data={formItems.message}/>
          <input type="submit" value="Send" />            
        </form>
        <OpenCloseForm clickOpenClose={this.handleOpenClose} />
      </div>
    );
  }
}

export default ContactForm;


