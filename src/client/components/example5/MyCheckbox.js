import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { FormGroup, FormControl, ControlLabel} from 'react-bootstrap';



export default class MyCheckbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      accountType: "company"
    }
  }
  handleChange = (e) =>{
    const value = e.target.value==="company" ? "individual" : "company";
    console.log(value);

    this.setState({
      accountType: value
    })
  }



  render(){
    const {input, meta} = this.props;
    //console.log(input);
    return(
      <FormGroup>
          <input {...input} type="checkbox" value={this.state.accountType} onChange={this.handleChange} checked={this.state.accountType==="company"} />company
      </FormGroup>
    )
  }
}