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


#### (Redux-form) Multiple input fields to one redux form value

**One Redux form field**
```js
<form onSubmit={handleSubmit}>
  <Field
    name="dob"
    label="Date of Birth"
    component={BdayPicker}
  />
</form>
```

**Rendering three selectbox**

```js
<Col xs={4}>
  <FormControl
    componentClass="select"
    name="month"
    value={this.state.month}
    onChange={this.handleChange}
  >
    <option value="">month</option>
    {
      monthOptions.map((month, index) => <option key={month} value={index}>{month}</option>)
    }
  </FormControl>          
</Col>
<Col xs={4}>
  <FormControl
    componentClass="select"
    name="day"
    value={this.state.day}
    onChange={this.handleChange}
  >
    <option value="">day</option>
    {
      dayOptions.map(day => <option key={day} value={day}>{day}</option>)
    }
  </FormControl>          
</Col>
<Col xs={4}>
  <FormControl
    componentClass="select"
    name="year"
    value={this.state.year}
    onChange={this.handleChange}
  >
    <option value="">year</option>
    {yearOptions.map(year => <option key={year} value={year}>{year}</option>)}
  </FormControl>          
</Col>                
```

**Merging three values to one for `dob` field**
```js
if (day === "" || month === "" || year === "") {
  const dateObject = {
    year,
    month,
    day
  };
  //console.log(this.getDate(dateObject))
  this.props.input.onBlur(this.getDate(dateObject));
  this.props.input.onChange(this.getDate(dateObject));
}
```


### Week3 of March

- Promise
- SubmittionError
- Mutation
- Promise.all
- Redux form creating hidden fields( address )

