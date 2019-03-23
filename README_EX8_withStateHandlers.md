# Example 8 - withStateHandler

[03/23/2019]

**Example 1**
- Passes **state object** properties and **immutable updater functions**.

```js
  const Counter = withStateHandlers(
    ({ initialCounter = 0 }) => ({
      counter: initialCounter,
    }),
    {
      incrementOn: ({ counter }) => (value) => ({
        counter: counter + value,
      }),
      decrementOn: ({ counter }) => (value) => ({
        counter: counter - value,
      }),
      resetCounter: (_, { initialCounter = 0 }) => () => ({
        counter: initialCounter,
      }),
    }
  )(
    ({ counter, incrementOn, decrementOn, resetCounter }) =>
      <div>
        <Button onClick={() => incrementOn(2)}>Inc</Button>
        <Button onClick={() => decrementOn(3)}>Dec</Button>
        <Button onClick={resetCounter}>Reset</Button>
      </div>
  )
```



**Example 2**
- state object: `pickupAddress`
- updater function: `setPickupAddress`

```js
const withFormattedAddress = withStateHandlers(
  {
    pickupAddress: ""
  },
  {
    setPickupAddress: () => value => ({
      pickupAddress: value
    })
  }
);

export const TestPage = compose(
  withCount
)(TestComponent)
```


**Example 2**
- state object: `counter`
- updater function: `incrementOn`
- 
```js
const withCount = withStateHandlers(
  { 
    counter: 0
  },
  {
    incrementOn: ({ counter }) => (value) => ({
      counter: counter + value,
    }),
  }  
);

export const TestPage = compose(
  withCount
)(TestComponent)
```


## References:
- [Recompose API - withStateHandlers](https://github.com/acdlite/recompose/blob/master/docs/API.md#withstatehandlers)
- [Mediam - My Favorite Recompose Functions](https://itnext.io/my-favorite-recompose-functions-c8ff98ea308f)
  