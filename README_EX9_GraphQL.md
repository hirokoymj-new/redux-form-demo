# GraphQL Playground

**Keyboard Shortcut to show suggestions**

```text
Ctrl + space
```

**URL**
http://localhost:4000/graphql


**Query**

```js
query BooksQuery{
  books {
    id
    name
    author {
      id
      name
      age
    }
  }
}
```

**Query with parameter**

```js
query bookQuery($id: ID){
  book(id: $id) {
    id
    name
  }
}

// Query Variable
{
  "id": "5c5122c3860529ef369ed12f"
}
```

**Query with parameter and require field**
https://graphql-demo.mead.io/

```js
query post($id: ID!){
  post(id: $id) {
    id
    title
  }
}

//Query Valuables
{
"id" : "217495b7-8b8d-416a-8e4e-dc659549ac81"
}
```




# Apollo Client 
#### graphql(query, [config])(component)
```js
import { graphql } from "react-apollo";
```

>The graphql() function is the most important thing exported by react-apollo. With this function you can create higher-order components that can execute queries and update reactively based on the data in your Apollo store.

**Example**

**withBooks.js**

```js
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const BOOKS = gql`
  query BooksQuery{
    books{
      id
      name
      genre
    }
  }
`;

export const withBooks = graphql(BOOKS, {
    props: ({ data }) => {
      console.log(data);

      return {
        booksLoading: data.loading,
        books: data ? data.books : []
      };
    }
  }
);
```

**ContactForm.js**

```js
export default compose(
  reduxForm({
    form: 'contactForm',
    validate: validateContactForm,
    initialValues: { firstName: "Hiroko" },
    destroyOnUnmount: false
  }),
  withBookList,
)(ContactForm);
```

## Fragments

#### Install babel plugin to be able to use `Fragment`
[Using babel-plugin-import-graphql](https://www.apollographql.com/docs/react/recipes/babel#using-babel-plugin-import-graphql)

```js
npm install --save-dev babel-plugin-import-graphql
```

#### Then add the plugin in your .babelrc configuration file:

```js
{
  "plugins": [
    "import-graphql"
  ]
}
```

#### How to use with query string

- Sample 1
```js
import gql from 'graphql-tag';
// or import gql from 'graphql-tag.macro';

const fragments = {
  hello: gql`
    fragment HelloStuff on Hello {
      universe
      galaxy
    }
  `
};

const query = gql`
  query {
    hello {
      world
      ...HelloStuff
    }
  }

  ${fragments.hello}
`;
```

- Sample 2
```js
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
```


### References:

- [Apollo Client: graphql()](https://www.apollographql.com/docs/react/api/react-apollo.html#graphql)
- [Apollo Client: multiple queries](https://www.apollographql.com/docs/react/react-apollo-migration.html#compose-to-render-composition)
- [Apollo Client: loading status](https://www.apollographql.com/docs/react/recipes/recompose.html#loading-status)
- [GraphQL quick tip: How to pass variables in GraphiQL](https://medium.com/graphql-mastery/graphql-quick-tip-how-to-pass-variables-into-a-mutation-in-graphiql-23ecff4add57)