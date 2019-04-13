import { graphql } from "react-apollo";
import gql from "graphql-tag";

import { AuthorFragments } from './AuthorFragments'


export const BOOK_QUERY = gql`
  query bookQuery($id: ID){
    book(id: $id) {
      id
      name
      genre
      author{
        id
        name
      }
    }
  }
`;

export const withBook = graphql(BOOK_QUERY, {
  options: (props) => ({
    variables: {
      id: props.match.params.id
    },
  }),
  props: ({ data }) =>({
    bookLoading: data.loading,
    book: data ? data.book : []
  })
});





