import React, { Component } from 'react'
import { Field, Fields, reduxForm, formValueSelector } from 'redux-form'
import { Button, FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';
import BdayPicker from './BdayPicker';
import { compose, withProps } from "recompose";
import { connect } from 'react-redux';


let BdayForm = (props) =>{
    //console.log(props);
    const { handleSubmit } = props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
        name="dob"
        label="Date of Birth"
        component={BdayPicker}
        maxYear={new Date().getFullYear() - 16}
        minYear={new Date().getFullYear() - 100}
        />
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>      
    );
}


export default compose(
  reduxForm({
    form: 'EXAMPLE5'
  }),
)(BdayForm)




