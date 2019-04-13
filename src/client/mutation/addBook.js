import {gql} from 'apollo-boost';
import { graphql } from "react-apollo";
import { BOOKS } from '../queries/withBooks';

const ADD_BOOK = gql`
  mutation($name: String!, $genre:String, $authorId:ID){
    addBook(name:$name, genre:$genre, authorId:$authorId){
      name
      id
    }
  }
`;


export const addBookMutation = graphql(ADD_BOOK,{
  name: "createBook",
  options: {
    refetchQueries: [{query: BOOKS}]
  }  
});


