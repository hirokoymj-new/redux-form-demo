import gql from "graphql-tag";


export const AuthorFragments = {
  authorInfo: gql`
    fragment AuthorInfo on Author {
      id
      name
    }
  `
};
