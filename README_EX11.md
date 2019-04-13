## React Apollo


 #### `graphql(query, [config])(component)`

 #### config.options

 >config.options is an object or a function 

Example 1

 ```js
export const withBook = graphql(BOOK_QUERY, {
  options: (props) => ({
    variables: {
      id: props.match.params.id
    },
  })
});
 ```