import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { addBookMutation } from '../../mutation/Book';
import { withAuthors } from '../../queries/withAuthors';


class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      authorId: '',
    }
  }

  componentDidMount(){
    // check if localstorage exists or not.
    console.log(localStorage.getItem('hirokoList'));
    console.log(typeof localStorage.getItem('hirokoList'));
    const obj = JSON.parse(localStorage.getItem('hirokoList'));
    console.log(typeof obj);
    console.log(`${obj.name}, ${obj.genre}`);


    if (localStorage.getItem("hirokoList") === null) {
      console.log('No data');
    }else{
      console.log('has data.');
      this.setState({
        name: obj.name,
        genre: obj.genre,
        authorId: obj.authorId
      })
    }
  }


  handleChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }


  submitForm(e) {
    e.preventDefault();
    const {name, genre, authorId} = this.state;
    console.log(name, genre, authorId);

    localStorage.setItem("hirokoList", JSON.stringify(this.state));
    this.props.history.push('/');

    // this.props.addBookMutation({
    //   variables: {
    //     name,
    //     genre,
    //     authorId,
    //   },
    //   //refetchQueries: [{query: getBooksQuery}]
    // });
  }

  render() {
    //console.log(this.props);
    const { authors, authorsLoading } = this.props;
    if(authorsLoading) return <div>Loading...</div>
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Book Name:</label>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
        </div>

        <div className="fields">
          <label>Genre:</label>
          <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre} />
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={this.handleChange} name="authorId" value={this.state.authorId}>
            <option>Select author</option>
            {authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)}
          </select>
        </div>
        <input type="submit" value="Save and Exit" />
      </form>
    );
  }
}

export const AddBookForm = compose(
  graphql(addBookMutation, {name: "addBookMutation"}),
  withAuthors
)(AddBook);


// <form id="add-book" onSubmit={this.submitForm.bind(this)}></form>