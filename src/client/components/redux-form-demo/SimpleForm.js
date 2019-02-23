import React, { Component } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import cx from 'classnames';
import { Button, Alert } from 'react-bootstrap';

class SimpleForm extends Component {
  locationInput({ input, meta: { touched, error } }) {
    const hasError = touched && error !== undefined;
    return (
      <div className={cx('form-group', {'has-error': hasError})}>
        <label className="control-label">Location</label>
        <input 
          className="form-control"
          placeholder="Location..."
          {...input} />
          {hasError &&
            <span className="help-block">{error}</span>
          }
      </div>
    );
  }

  render() {
    const { handleSubmit, error } = this.props;
    return (
      <div>
      {error && <Alert bsStyle="danger">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <Field name="location" component={this.locationInput} /> 
        <br/> 
        <Button type="submit">Submit</Button>
      </form>      
      </div>
    );
  }
}

const validate = values => {
  const errors = {}
  if (!values.location || values.location.trim() === '') {
    errors.location = 'Location required'
  } 
  return errors
}

export default reduxForm({
  form: 'simple',
  validate
})(SimpleForm)