import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { BOOKS } from '../queries/withBooks';

const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!){
    deleteBook(id: $id){
      id
      name
    }
  }
`;


export const deleteBook = graphql(DELETE_BOOK, {
  name: "deleteBook",
  options: {
    refetchQueries: [{query: BOOKS}]
  }  
})


