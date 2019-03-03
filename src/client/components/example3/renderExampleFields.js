import React, { Component } from 'react'
import { withProps } from 'recompose';

const data = [
  {skill: "front-end", options: ["HTML", "CSS", "JavaScript"]},
  {skill:"back-end", options: ["PHP", "Node", "MySQL"]},
];

let renderExampleFields = ({ colors, skills, totalAmount, colorOptions, myskills }) => {
  console.log("myskills: ", myskills);
  return (
    <div>
      <div className="input-row">
        <label>Colors:</label>
        <select {...colors.input}>
        <option value="">Select color</option>
        {
          colorOptions.map(d => <option key={d.id} value={d.name}>{d.name}</option>)
        }
        </select>      
      </div>

      <div className="input-row">
        <label>Total: {totalAmount}</label>
      </div>

      <div className="input-row">
        <label>Skills:</label>
        <select {...skills.input}>
        <option value="">Select skills</option>
        <option value="front-end">front-end</option>
        <option value="back-end">back-end</option>
        </select>
      </div>
      <hr />
      <div className="input-row">
        <label>My Skills:</label>
        <select>
        <option value="">my skill list</option>
        {
          myskills.map(d => <option key={d} value={d}>{d}</option>)
        }
        </select>
      </div>
    </div>
  )
}


renderExampleFields = withProps(({ skills }) =>{
  let myskills = skills.input.value
    ? data.filter(d => d.skill === skills.input.value)
    : [];
  if(myskills.length === 1){
    myskills = myskills[0].options;
  };

  return{
    totalAmount: 100,
    colorOptions: [
      {id:1, name: "red"},
      {id:2, name: "blue"},
      {id:3, name: "green"}      
    ],
    myskills
  }
})(renderExampleFields)

export default renderExampleFields;