import React, { Component } from 'react'
import { withStateHandlers, compose } from 'recompose';


const TestComponent = (props) =>{
  console.log(props);
  return(
    <div>
      <h1>TEST</h1>
      <div>{props.counter}</div>
    </div>
  )
}


// const withFormattedAddress = withStateHandlers(
//   {
//     pickupAddress: ""
//   },
//   {
//     setPickupAddress: () => value => ({
//       pickupAddress: value
//     })
//   }
// );

const withCount = withStateHandlers(
  { 
    counter: 0
  },
  {
    incrementOn: ({ counter }) => (value) => ({
      counter: counter + value,
    }),
  }  
)

export const TestPage = compose(
  withCount
)(TestComponent)




