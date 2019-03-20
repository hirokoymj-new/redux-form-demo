import React from 'react';
import CheckboxDemo from './CheckboxDemo';
import Test from './Test'

export default class CheckboxDemoPage extends React.Component{
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
        <h2>Redux Form: Checkbox (true/false - individual/company)</h2>
        <CheckboxDemo onSubmit={this.submit}/>

        <hr />
        <Test />

      </div>
    )
  }
}