import React from 'react';
import { Grid, Row, Col, Button, FormGroup, FormControl, ControlLabel, Form, FieldGroup, Checkbox, Radio } from 'react-bootstrap';

export default class Example7Page extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Grid fluid className="outerArea zero-padding">
        <Grid>
          <Row className='row-eq-height'>
            <Col xs={12} sm={7} className="leftCol" >aaa
              <h1>Layout prototype</h1>

              <form>
                <div style={{height: "1200px"}}>
                  <p>adafsdfasd;falkjadfkja;lsdfkaj;sdl</p>
                    <FormGroup>
                      <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
                      <Checkbox inline>3</Checkbox>
                    </FormGroup>
                    <FormGroup
                      controlId="formBasicText"
                      >
                      <ControlLabel>Working example with validation</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Enter text"
                      />
                    </FormGroup>
                </div>
              </form>
              <div className="submitArea">
                <Button className="pull-left">Button1</Button>
                <Button className="pull-right">Button1</Button>
              </div>
            </Col>
            <Col xs={12} sm={5} className="rightCol"></Col>
          </Row>
        </Grid>
      </Grid>
    )
  }
}


