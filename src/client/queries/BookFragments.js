import gql from "graphql-tag";


export const BookFragments = {
  bookInfo: gql`
    fragment BookInfo on Book{
     id
     name 
     genre
    }
  `
}