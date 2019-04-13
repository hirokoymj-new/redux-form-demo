import React, { Component } from 'react';
import {Grid, Col, Row, Table, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { withAuthors } from '../../queries/withAuthors';
import { withBook } from '../../queries/withBook';
import { compose } from 'recompose';
import { EditBookForm } from './EditBookForm';


const EditBook = ({ authors, authorsLoading, book, bookLoading }) =>{
  if(authorsLoading || bookLoading) return <div>Loading...</div>
  return(
      <Grid>
      <Row>
        <Col xs={12}>
          <h1>Edit Book Page</h1>
          <EditBookForm book={book} authors={authors} />
        </Col>
      </Row>
      </Grid>
  )
}


export const EditBookPage = compose(
  withAuthors,
  withBook
)(EditBook);


