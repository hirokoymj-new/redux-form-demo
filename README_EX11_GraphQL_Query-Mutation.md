## React Apollo - Query and Mutation

 ## graphql() funtion
 
 The graphql() function will create higher-order components that can execute GraphQL operation such as a query or a mutation and update data in your Apollo store.


 ```js
 import { graphql } from 'react-apollo';
 ```

### `graphql(query, [config])(component)`

<hr /> 

## Mutation - Create a book


Example 1
```js
import React from 'react';
import { graphql, compose } from 'react-apollo';
import {gql} from 'apollo-boost';

class AddForm extends React.Component{
  onSubmit = (e) =>{
      e.preventDefault();
      const { name } = this.state;
      this.props.mutate({ //<--- POINT!
          variables: {
            name,
            genre: 'nobel',
          }
      }).then(({ data })=>{
          console.log('Added!');
      });
  }
}

const ADD_BOOK = gql`
  mutation($name: String!, $genre:String, $authorId:ID){
    addBook(name:$name, genre:$genre, authorId:$authorId){
      name
      id
    }
  }
`;

export const AddFormController = compose(
  graphql(ADD_BOOK)
)(AddForm)
```
**Example1 Points**
> - graphql -> "mutation"
> - When a component receives the mutation -> 'this.props.mutate()'.

Example 2 - Specify the name for mutation

```js
export const AddFormController = compose(
  graphql(ADD_BOOK, { name: "createBook"})
)(AddForm)
```


## Query - Get a single book

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