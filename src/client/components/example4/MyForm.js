import React, { Component } from 'react'
import { Field, Fields, reduxForm, SubmissionError, formValueSelector } from 'redux-form'
import cx from 'classnames';
import { Button, FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';
import { compose, withProps } from "recompose";
import { connect } from 'react-redux';


const renderEmail = ({input, label, meta: {touched, error}}) =>{
  //console.log(input.value);
  return (
    <FormGroup>
      <label>{label}</label>
      <Checkbox {...input} inline></Checkbox>
      {!input.value &&
        (<div>value is false and show as default!!</div>)
      }
    </FormGroup>    
  )
}


let MyForm = (props) =>{
    //console.log(props);
    const { isChecked, handleSubmit, hasNotCar, change } = props;
    //console.log(isChecked);
    const handleHasNotCarChange = (event, value) =>{
      if(value===false)
      change('car', "");
      change('make', '');
    }
    return (
      <form onSubmit={handleSubmit}>
          <Field
            name="email"
            component={renderEmail}
            type="checkbox"
            label="Email"
          />
          <div>
            <label>Not have Car?</label>
            <Field
              name="hasNotCar"
              type="checkbox"
              component="input"
              onChange={handleHasNotCarChange}
            />
          </div>
          {!hasNotCar && (
            <div>
              <div>
                <label>Car model</label>
                <Field 
                  name="car"
                  type="text"
                  component="input"
                />
              </div>
              <div>
                <label>Car make</label>
                <Field 
                  name="make"
                  type="text"
                  component="input"
                />
              </div>              
            </div>

 
          )}
          <div>
            <Button type="submit">Submit</Button>
          </div>
      </form>      
    );
}


export default compose(
  reduxForm({
    form: 'MYFORM',
  }),
  connect(state => {
    const isChecked = formValueSelector('MYFORM')(state, 'email');
    const hasNotCar = formValueSelector('MYFORM')(state, "hasNotCar");
    return {
      isChecked,
      hasNotCar
    }
  })  
)(MyForm)


//=== EX.1
// MyForm = reduxForm({
//   form: 'MYFORM',
// })(MyForm)

// //const selector = formValueSelector('MYFORM');
// MyForm = connect(state => {
//   // can select values individually
//   const isChecked = formValueSelector('MYFORM')(state, 'email');
//   const hasCar = formValueSelector('MYFORM')(state, "hasCar");
//   return {
//     isChecked,
//     hasCar
//   }
// })(MyForm)

// export default MyForm;
//=== END EX.1



