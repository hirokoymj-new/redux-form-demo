import React, { Component } from 'react';


// const Card = ({ title }) =>{
//   return(
//     <div>
//       <h1>{title}</h1>
//       <div>Section 1</div>
//     </div>
//   )
// }


export default class Test extends Component{
  constructor(props){
    super(props);
    this.state = {
      cardStatus: false
    }
  }
  handleClick = (event) =>{
    this.setState(state, props =>({
      cardStatus: !prevState
    }));
  }

  render(){
    const { cardStatus } = this.state;
    console.log(cardStatus);
    return(
      <div>
        <div title="aaa" onClick={this.handleClick}>aaa</div>
        { cardStatus &&
          <div>this is section 1.</div>
        }
      </div>
    )
  }
}