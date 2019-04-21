import React from 'react';
import { graphql, compose } from 'react-apollo';
import {gql} from 'apollo-boost';

class AddForm extends React.Component{
	constructor(props){
			super(props);
			this.state = {
					name: ''
			}
	}

	handleChange = (e) =>{
		this.setState({
			name: e.target.value
		})
	}
	
	onSubmit = (e) =>{
			e.preventDefault();
			const { name } = this.state;
			this.props.mutate({
					variables: {
						name,
						genre: 'nobel',
					}
			}).then(({ data })=>{
					console.log('Added!');
			});
	}

	render(){
		console.log(this.props);
		return(
				<form onSubmit={this.onSubmit}>
						<input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
						<button type="submit">Submit</button>
				</form>
		)
	}
}


const ADD_BOOK = gql`
  mutation($name: String!, $genre:String, $authorId:ID){
    addBook(name:$name, genre:$genre, authorId:$authorId){
      name
      id
    }
  }
`;

export const AddFormController = compose(
  graphql(ADD_BOOK)
)(AddForm)

