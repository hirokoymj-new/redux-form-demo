# Redux-Form Note


#### How to transform boolean to string in Redux form.

```js
const { handleSubmit, account_type, change } = props;
return (
  <form onSubmit={handleSubmit}>
    <Field
      name="accountType"
      component="input"
      type="checkbox"
      format={v => v === 'individual'} // convert string to boolean
      normalize={v => v ? 'individual' : 'company'} //convert boolean to string
      onChange={(event, value)=>{
        if (value === 'individual'){
          change("firstName", "")
        }
      }}
    />
```

- [normalizing](https://redux-form.com/7.2.3/examples/normalizing/)
  > Transform the value before storing. 

- [format](https://redux-form.com/7.2.3/docs/api/fields.md/)
  >Formats the value from the Redux store to be displayed in the field input. Common use cases are to format Numbers into currencies or Dates into a localized date format.

- [change](https://redux-form.com/7.2.3/docs/api/props.md/)
  > It's one of the props in redux-form and changes the value of the field in the Redux store.




### Week3 of March

- Promise
- SubmittionError
- Mutation
- Promise.all
- Redux form creating hidden fields( address )
- 

