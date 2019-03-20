import React, { Component } from 'react'
import { Field, Fields, reduxForm, formValueSelector } from 'redux-form'
import { Button, FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';
import { compose, withProps } from "recompose";
import { connect } from 'react-redux';


let CheckboxDemo = (props) =>{
    //console.log(props);
    const { handleSubmit, account_type, change } = props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="accountType"
          component="input"
          type="checkbox"
          format={v => v === 'individual'} // convert string to boolean
          normalize={v => v ? 'individual' : 'company'} //convert boolean to string
          onChange={(event, value)=>{
            if (value === 'individual'){
              change("firstName", "")
            }
          }}
        />
        <label>Individual</label>
        {
          account_type === 'company' && 
          <Field name="firstName" type="text" component="input" />
        }
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>      
    );
}


export default compose(
  reduxForm({
    form: 'EXAMPLE6',
    initialValues:{
      accountType: "company"
    }
  }),
  connect(state => {
    const account_type = formValueSelector('EXAMPLE6')(state, 'accountType');
    return {
      account_type
    }
  })     
)(CheckboxDemo)





