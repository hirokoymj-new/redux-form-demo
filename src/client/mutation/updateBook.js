import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { BOOKS } from '../queries/withBooks';

const UPDATE_BOOK = gql`
  mutation EditBook($id: ID!, $name: String){
    updateBook(id: $id, name: $name){
      id
      name
    }
  }
`;


export const updateBook = graphql(UPDATE_BOOK, {
  options: {
    refetchQueries: [{query: BOOKS}]
  }  
})