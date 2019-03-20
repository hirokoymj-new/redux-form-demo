import React from 'react';
import BdayForm from './BdayForm';

export default class BdayFormPage extends React.Component{
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
        <h1>Bday Form Page</h1>
        <BdayForm onSubmit={this.submit}/>
      </div>
    )
  }
}