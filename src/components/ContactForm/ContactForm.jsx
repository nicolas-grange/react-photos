import React from 'react';
import OpenCloseForm from './OpenCloseForm';
import FormElement from '../FormElement/FormElement';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      visible: true,
      submitted: false,
      success: false,
      name: '',
      email: '',
      subject: '',
      message: '',
      formMessage: ''
    };
  }

  handleOpenClose() {
    this.setState((prevState, props) => ({
      visible: prevState.visible === true ? false : true
    }));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value.trim() });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({submitted: true});
    let success, message;
    [success, message] = this.verifyForm();
    this.setState({
      success: success,
      formMessage: message
    });

    // if we have to send the mail
    if(this.state.sucess) {
      // send mail
    }
  }

  verifyForm() {
    const name = this.state.name;
    const mail = this.state.email;
    const subject = this.state.subject;
    const message = this.state.message;
    if(name.length < 3) {
      return [false, 'Error: name must have more than 2 characters!'];
    }
    if (!mail.match(/[a-z0-9_\-.]+@[a-z0-9_\-.]+\.[a-z]+/i)) {
      return [false, 'Error: email format does not match!'];
    }
    if(subject.length < 3) {
      return [false, 'Error: subject must have more than 2 characters!'];
    }
    if(message.length < 6) {
      return [false, 'Error: message must have more than 5 characters!'];
    }
    
    return [true, 'Success, message sent!'];
  }

  render() {
    const formItems = {
      name:  {
        name: "name",
        label: "Name",
        item: {
          kind: "input",
          type: "text",
          value: this.state.name
        }
      },
      mail: {
        name: "email",
        label: "E-mail",
        item: {
          kind: "input",
          type: "email",
          value: this.state.email
        }
      },
      subject: {
        name: "subject",
        label: "Subject",
        item: {
          kind: "input",
          type: "text",
          value: this.state.subject
        }
      },
      message: {
        name: "message",
        label: "Tap your message",
        item: {
          kind: "textarea",
          value: this.state.message
        }
      }
    }
    const visible = this.state.visible;

    const formMessage = (this.state.submitted ? (<p className={'message ' + (this.state.success ? 'success' : 'error')}>{this.state.formMessage}</p>) : null);

    return (
    	<div className={"contact-form wrapper-intern " + (visible === true ? 'visible' : 'invisible')}>
        <form onSubmit={this.handleSubmit}>
          <FormElement updateValue={this.handleChange} data={formItems.name}/>
          <FormElement updateValue={this.handleChange} data={formItems.mail}/>
          <FormElement updateValue={this.handleChange} data={formItems.subject}/>
          <FormElement updateValue={this.handleChange} data={formItems.message}/>
          <div className="submit-message">
            <input type="submit" value="Send" />  
            {formMessage}
          </div>
        </form>
        <OpenCloseForm clickOpenClose={this.handleOpenClose} />
      </div>     
    );
  }
}

export default ContactForm;


