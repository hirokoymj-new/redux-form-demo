import React from 'react';
import ExampleForm from './ExampleForm'; 

export default class ExampleFormPage extends React.Component{
  constructor(props){
    super(props);
  }

  submit({ firstName, lastName }) {
    console.log('submit');
    console.log(`${firstName}, ${lastName}`);
  }

  render(){
    return(
      <div>
        <h2>Example</h2>
        <ExampleForm onSubmit={this.submit}/>
      </div>
    )
  }
}