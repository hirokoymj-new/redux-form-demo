import {gql} from 'apollo-boost';


const addBookMutation = gql`
  mutation($name: String!, $genre:String, $authorId:ID){
    addBook(name:$name, genre:$genre, authorId:$authorId){
      name
      id
    }
  }
`;

const deleteBookMutation = gql`
  mutation DeleteBook($id: ID!){
    deleteBook(id: $id){
      id
      name
    }
  }
`;

const editBookMutation = gql`
  mutation EditBook($id: ID!, $name: String){
    editBook(id: $id, name: $name){
      id
      name
    }
  }
`;


export {
  addBookMutation, 
  deleteBookMutation,
  editBookMutation
};