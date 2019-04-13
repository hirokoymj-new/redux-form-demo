import { graphql } from "react-apollo";
import gql from "graphql-tag";

import { AuthorFragments } from './AuthorFragments'


export const BOOKS = gql`
  query BooksQuery{
    books{
      id
      name
      genre
      author{
        ...AuthorInfo
      }
    }
  }  
  ${AuthorFragments.authorInfo}
`;

export const withBooks = graphql(BOOKS, {
    props: ({ data }) => ({
        booksLoading: data.loading,
        books: data ? data.books : {}
      })
    }
);

