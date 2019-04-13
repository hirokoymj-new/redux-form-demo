import { graphql } from "react-apollo";
import gql from "graphql-tag";

import { BookFragments } from './BookFragments';


const AUTHORS = gql`
  query AuthorsQuery{
    authors {
      name
      id
      books{
        ...BookInfo
      }
    }
  }
  ${BookFragments.bookInfo}
`;



export const withAuthors = graphql(AUTHORS,{
  props: ({ data }) =>{
    //console.log(data);
    return {
      authorsLoading: data.loading,
      authors: data ? data.authors : []
    }
  }
})
