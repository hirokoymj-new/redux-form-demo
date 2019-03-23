# Redux-Form Demo

### handleSubmit vs onSubmit
- [Redux Form: handleSubmit vs onSubmit](https://redux-form.com/6.6.3/docs/faq/handlevson.md/)
- [stackoverflow: How to handleSubmit with a redux-form](https://stackoverflow.com/questions/43966804/how-to-handlesubmit-with-a-redux-form)

> a function meant to be passed to `<form onSubmit={handleSubmit}>` or to  `<button onClick={handleSubmit}>`. It will run validation, both sync and async, and, if the form is valid, it will call this.props.onSubmit(data) with the contents of the form data.
Optionally, you may also pass your onSubmit function to handleSubmit which will take the place of the onSubmit prop. For example:



### SubmissionError 

- [Redux Form: SubmissionError](https://redux-form.com/6.6.3/docs/api/submissionerror.md/)
- [Redux Form: Submit Validation Example](https://redux-form.com/6.6.3/examples/submitvalidation/)
- [Github - redux-form sample](https://github.com/benawad/redux-forms-example-weather/blob/master/src/)


**SimpleForm.js**
```js
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
```

**SimpleFormPage.js**

```js
import React from 'react';
import SimpleForm from './SimpleForm';
import { SubmissionError } from 'redux-form'

export default class SimpleFormPage extends React.Component{
  
  submit({ location }, dispatch) {
    console.log('submit');

    return new Promise((resolve, reject) => {
      console.log('test-1');
      resolve(10);
    })
    .then(( value )=>{
      console.log('test-2');
      console.log(value);
      throw new Error('Invalid location. Only US address is available.');
    })
    .catch((error) => {
      throw new SubmissionError(
        {location: error.message, _error: 'API call failed!'}
      );
    });
  }

  render(){
    return(
      <div>
        <h1>Simple Form Page</h1>
        <SimpleForm onSubmit={this.submit}/>
      </div>
    )
  }
}
```


## References:
- [Basic redux-form tutorial](https://www.youtube.com/watch?v=c2D-jjVAEf8)
