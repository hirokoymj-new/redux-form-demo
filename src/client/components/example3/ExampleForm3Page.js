import React from 'react';
import ExampleForm3 from './ExampleForm3';

export default class ExampleForm3Page extends React.Component{
  constructor(props){
    super(props);
  }

  submit() {
    console.log('submit');
  }

  render(){
    return(
      <div>
        <h1>Redux-form with Props</h1>
        <ExampleForm3 onSubmit={this.submit}/>
      </div>
    )
  }
}