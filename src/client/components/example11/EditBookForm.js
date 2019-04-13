import React, { Component } from 'react';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
// import { withAuthors } from '../../queries/withAuthors';
// import { withBook } from '../../queries/withBook';
import { updateBook } from '../../mutation/updateBook';
import { compose } from 'recompose';


export class WithEditBookForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.props.book.id !== undefined ? this.props.book.id : '',
      name: this.props.book !== undefined ? this.props.book.name : '',
      genre: this.props.book !== undefined ? this.props.book.genre : '',
      authorId: this.props.book !== undefined ? this.props.book.author.id : ''
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  updateForm = (e) => {
    e.preventDefault();
    const { mutate } = this.props;
    const { id, name } = this.state;
    mutate({
      variables: {
        id,
        name
      }
    }).then(({ data })=>{
      console.log('update book');
      console.log(data);
    });    
  }


  render(){
    console.log('EditBookForm');
    console.log(this.props);
    const { authors } = this.props;

    return(
        <form id="add-book" onSubmit={this.updateForm}>
          <FormGroup>
            <ControlLabel>Book Name:</ControlLabel>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name} className="form-control" />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Genre:</ControlLabel>
            <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre} className="form-control" />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Author:</ControlLabel>
            <select onChange={this.handleChange} name="authorId" className="form-control" value={this.state.authorId}>
              <option>Select author</option>
              {authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)}
            </select>
          </FormGroup>
          <Button type="submit">Update</Button>
        </form>        
    )
  }
}

export const EditBookForm = compose(
  updateBook
)(WithEditBookForm);





