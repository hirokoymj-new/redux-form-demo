import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validateContactForm from './validateContactForm';
//import withSubmit from './withSubmit';
import { withBooks } from '../../queries/withBooks';
import { withAuthors } from '../../queries/withAuthors';

import { compose } from 'recompose';

import { authorDropdownField } from './authorDropdownField';
import { bookDropdownField } from './bookDropdownField';
import { firstNameTextField } from './firstNameTextField';



let ContactForm = props => {
  console.log("ContactForm");
  console.log(props);
  const { handleSubmit, pristine, reset, booksLoading, authorsLoading, authors, books  } = props;
  if(booksLoading || authorsLoading ) return <div>....loading</div>
  return (
    <form>
      <Field
        name="firstName"
        component={firstNameTextField}
        type="text"
        placeholder="First Name"
        label="First Name"
      />
      <Field 
        name="bookId"
        component={bookDropdownField}
        label="My Book List"
        books={books}
      />
      <Field 
        name="authorId"
        component={authorDropdownField}
        label="Author List"
        authors={authors}
      /> 
      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default compose(
  reduxForm({
    form: 'contactForm',
    validate: validateContactForm,
    initialValues: { firstName: "Hiroko" },
    destroyOnUnmount: false
  }),
  withBooks,
  withAuthors,
  //withSubmit
)(ContactForm);

 