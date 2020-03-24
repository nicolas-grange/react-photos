import React from 'react';

class FormElement extends React.Component {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      focus: false,
      empty: true
    };
  }

  handleChange(e) {
    this.setState({
      empty: e.target.value.trim().length > 0 ? false : true
    });
    this.props.updateValue(e);
  }

  handleFocus() {
    this.setState({
      focus: true
    });
  }

  handleBlur() {
    this.setState({
      focus: false
    });
  }

  createInputField(field) {
    return(
      <input 
        name={field.name ? field.name : ''}
        value={field.item.value ? field.item.value : ''}
        type={field.item.type ? field.item.type : ''} 
        onChange={this.handleChange} 
        onFocus={this.handleFocus} 
        onBlur={this.handleBlur} 
      />
    );
  }

  createTextareaField(field) {
    return(
      <textarea 
        name={field.name ? field.name : ''}
        value={field.item.value ? field.item.value : ''}
        onChange={this.handleChange} 
        onFocus={this.handleFocus} 
        onBlur={this.handleBlur}>
      </textarea>
    );
  }

  render() {
    const field = this.props.data;
    const focus = this.state.focus;
    const empty = this.state.empty;

    let fieldItem;
    if(field && field.name) {
      if(field.item && field.item.kind) {
        switch(field.item.kind) {
          case "input":
            fieldItem = this.createInputField(field);
          break;
          case "textarea":
            fieldItem = this.createTextareaField(field);
          break;
          default:
            fieldItem = null;
          break;
        }
      } 
    }

    return(
      <div className={"form-element " + ((field.item.kind && field.item.kind === "textarea") ? 'textarea' : '')}>
          <label className={(focus || !empty) ? "focus " : ""}>
            {field.label ? field.label : ''}
          </label>
          {fieldItem}
      </div>
    );
  }
}

export default FormElement;
