import React from 'react';
import MultipleForm from './MultipleForm';
import { SubmissionError } from 'redux-form';
import RenderTest from './renderTest';

export default class MultipleFormPage extends React.Component{
  constructor(props){
    super(props);
  }

  submit({ firstName, lastName }, dispatch) {
    console.log('submit');
    console.log(`${firstName}, ${lastName}`);
  }

  render(){
    return(
      <div>
        <h1>Redux Form - using <b>Fields</b></h1>
        <MultipleForm onSubmit={this.submit}/>
      </div>
    )
  }
}