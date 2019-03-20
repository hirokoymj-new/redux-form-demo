import React from 'react';
import MyForm from './MyForm';
import { SubmissionError } from 'redux-form';

export default class MyFormPage extends React.Component{
  constructor(props){
    super(props);
  }

  submit(values) {
    console.log('submit');
    console.log(values);
  }

  render(){
    return(
      <div>
        <h1>My Form</h1>
        <MyForm onSubmit={this.submit}/>
      </div>
    )
  }
}