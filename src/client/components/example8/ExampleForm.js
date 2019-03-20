import React, { Component } from 'react'
import { Field, Fields, reduxForm } from 'redux-form'
import { Button, Alert, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { withProps } from 'recompose';


class ExampleForm extends Component {
  submit = () =>{
    console.log('submit');
  }

  render() {
    const { handleSubmit, error } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.submit)}>
          <Field 
            name="firstName"
            component="input"
            type="text"
          />
          <Field 
            name="lastName"
            component="input"
            type="text"
          />   
          <br/>
          <Button type="submit">Submit</Button>
        </form>      
      </div>
    );
  }
}


export default reduxForm({
  form: 'EXAMPLE8_FORM'
})(ExampleForm)