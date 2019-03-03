import React, { Component } from 'react'
import { Fields, reduxForm } from 'redux-form'
import { Button } from 'react-bootstrap';
import renderExampleFields from './renderExampleFields';


class ExampleForm3 extends Component {
  render() {
    const { handleSubmit, error } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Fields
            names={["colors", "skills"]}
            component={renderExampleFields} 
          />
          <Button type="submit">Submit</Button>
        </form>      
      </div>
    );
  }
}

export default reduxForm({
  form: 'EXAMPLE_FORM',
})(ExampleForm3)


