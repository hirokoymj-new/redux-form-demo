import React, { Component } from 'react'
import { Field, Fields, reduxForm } from 'redux-form'
import { Button, Alert, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import RenderTest from './renderTest';
import { withProps } from 'recompose';

let renderMultiFields = ({ firstName, lastName, colors, total }) => {
  //console.log(`total: ${total}`);
  return (
    <div>
      <div className="input-row">
        <label>First Name:</label>
        <input type="text" {...firstName.input } />
        {firstName.meta.touched && firstName.meta.error &&
          (<span>{firstName.meta.error}</span>) }        
      </div>
      <div className="input-row">      
        <label>Last Name:</label>
        <input type="text" {...lastName.input } />
        {lastName.meta.touched && lastName.meta.error &&
          (<span>{lastName.meta.error}</span>)}
      </div>
      <div className="input-row">
        <label>colors:</label>
        <select {...colors.input}>
            <option>color1</option>
            <option>color2</option>
            <option>color3</option>
        </select>
      </div>
      <div>
        <label>Total:</label>
        <div>{total}</div>
      </div> 
    </div>
  )
}

renderMultiFields = withProps(props =>{
  return{
    total: 100
  }
})(renderMultiFields)


const renderAmount = ({input, meta}) => {
  return (
    <div>
      <div className="input-row">
        <label>amount: </label>
        <input {...input } />
      </div>
    </div>
  )
}

const formValidation = ({firstName, lastName}) => {
  console.log("formValidation");
//  console.log(values);
  const errors = {}
  if(!firstName || firstName.trim()=== ""){
    errors.firstName = "required."
  }
  if(!lastName || lastName.trim() === ""){
    errors.lastName = "Last Name is required."
  }
  return errors  
}


class MultipleForm extends Component {

  render() {
    const { handleSubmit, error } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Fields 
            names={[
              'firstName',
              'lastName',
              'colors'
            ]}
            component={renderMultiFields} 
          />
          <Field 
            name="amount"
            component={renderAmount}
            type="number"
          />   
          <br/>
          <Field name="hiroko" type="text" component={RenderTest.Test1} /> 
          <Field name="test2" type="text" component={RenderTest.Test2} /> 
          <Button type="submit">Submit</Button>
        </form>      
      </div>
    );
  }
}


export default reduxForm({
  form: 'MULTIPLE_FORM',
  validate: formValidation
})(MultipleForm)