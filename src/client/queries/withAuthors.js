import { graphql } from "react-apollo";
import gql from "graphql-tag";


const AUTHORS = gql`
  query AuthorsQuery{
    authors {
      name
      id
    }
  }
`

export const withAuthors = graphql(AUTHORS,{
  props: ({ data }) =>{
    console.log(data);
    return {
      // authorInfo: {
      //   loading: data.loading,
      //   data: data ? data.authors : []
      // }
      authorsLoading: data.loading,
      authors: data ? data.authors : []
    }
  }
})
