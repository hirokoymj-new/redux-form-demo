import { graphql } from "react-apollo";
import gql from "graphql-tag";


const fragments = {
  author: gql`
    fragment AuthorStuff on Author {
      id
      name
    }
  `
};


const BOOKS = gql`
  query BooksQuery{
    books{
      id
      name
      genre
    }
    author{
      ...AuthorStuff
    }
  }
  ${fragments.author}
`;

export const withBooks = graphql(BOOKS, {
    props: ({ data }) => {
      console.log(data);

      return {
        // bookInfo: {
        //   loading: data.loading,
        //   data: data ? data.books : []
        // }
        booksLoading: data.loading,
        books: data ? data.books : []
      };
    }
  }
);
