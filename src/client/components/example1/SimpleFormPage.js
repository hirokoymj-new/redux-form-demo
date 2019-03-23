import React from 'react';
import SimpleForm from './SimpleForm';
import { SubmissionError } from 'redux-form';

export default class SimpleFormPage extends React.Component{
  constructor(props){
    super(props);
  }

  submit({ location }, dispatch) {
    console.log('submit');
    return new Promise((resolve, reject) => {
      console.log('test-1');
      resolve(10);
    })
    .then(( value )=>{
      console.log('test-2');
      console.log(value);
      throw new Error('Invalid location. Only US address is available.');
    })
    .catch((error) => {
      throw new SubmissionError(
        {location: error.message, _error: 'API call failed!'}
      );
    });
  }

  render(){
    return(
      <div>
        <h1>Simple Form Page</h1>
        <SimpleForm onSubmit={this.submit}/>
      </div>
    )
  }
}