import React from 'react';
import Select from 'react-select';
import {Grid, Row, Col } from 'react-bootstrap';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];


export class DropdownTest extends React.Component{
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
    
  render(){
    const { selectedOption } = this.state;
    return(
      <Grid>
        <Row>
          <Col xs={6}>
            <h1>React-Select Test Page</h1>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}