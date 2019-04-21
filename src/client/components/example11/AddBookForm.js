import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { addBookMutation } from '../../mutation/addBook';
import { deleteBook } from '../../mutation/deleteBook';
import { ADD_BOOK } from '../../mutation/addBook';
import { withAuthors } from '../../queries/withAuthors';
import { withBooks } from '../../queries/withBooks';
import { Link } from 'react-router-dom';
import {Grid, Col, Row, Table, FormGroup, ControlLabel, Button } from 'react-bootstrap';


class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      authorId: '',
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onDeleteBook = (id) =>{
    //console.log(`onDeleteBook(${id})`);
    const { deleteBook } = this.props;
    deleteBook({
      variables: {
        id: id
      }
    }).then(({ data })=>{
      console.log('deleted book');
      console.log(data);
    });
  }


  submitForm(e) {
    e.preventDefault();
    const {name, genre, authorId} = this.state;
//    console.log(name, genre, authorId);
    console.log(this.props);
    // === Example 1
    const { mutate } = this.props;
    mutate({
      variables: {
        name,
        genre,
        authorId
      }
    }).then(({ data })=>{
      console.log('done mutation.');
      console.log(data);
    });

    // === Example 2
    // const { createBook } = this.props;
    // createBook({
    //   variables: {
    //     name,
    //     genre,
    //     authorId
    //   }
    // }).then(({ data })=>{
    //   console.log('done mutation.');
    //   console.log(data);
    // })    
  }

  render() {
    console.log(this.props);
    const { authors, authorsLoading, books, booksLoading } = this.props;
    if(authorsLoading || booksLoading) return <div>Loading...</div>
    return (
      <Grid>
      <Row>
        <Col xs={12}>
          <form id="add-book" onSubmit={this.submitForm.bind(this)}>
            <FormGroup>
              <ControlLabel>Book Name:</ControlLabel>
              <input type="text" name="name" onChange={this.handleChange} className="form-control" />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Genre:</ControlLabel>
              <input type="text" name="genre" onChange={this.handleChange} className="form-control" />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Author:</ControlLabel>
              <select onChange={this.handleChange} name="authorId" className="form-control" >
                <option>Select author</option>
                {authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)}
              </select>
            </FormGroup>
            <Button type="submit">Submit</Button>
          </form>        
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <hr />
          <Table bordered>
            <thead>
              <tr>
                <th>Book Id</th>
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Delete</th>
              </tr>          
            </thead>
            <tbody>
            {
              books.map(book => 
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td><Link to={`/${book.id}`}>{book.name}</Link></td>
                  <td>{book.author.name}</td>
                  <td><Button onClick={() => this.onDeleteBook(book.id)}>Delete</Button></td>
                </tr>
                )
            }
            </tbody>
          </Table>        
        </Col>
      </Row>
      </Grid>
    );
  }
}

export const AddBookMutationForm = compose(
  //graphql(ADD_BOOK, { name: "createBook"}),
  addBookMutation,
  withAuthors,
  withBooks,
  deleteBook  
)(AddBook);


// <form id="add-book" onSubmit={this.submitForm.bind(this)}></form>