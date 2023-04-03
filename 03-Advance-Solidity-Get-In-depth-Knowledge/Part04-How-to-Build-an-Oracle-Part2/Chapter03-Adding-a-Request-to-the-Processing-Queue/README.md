# Chapter 3: Adding a Request to the Processing Queue

In the previous chapter, you've made it so that a function called `addRequestToQueue` is triggered every time the oracle contracts fires `GetLatestEthPriceEvent`. Let's fill in the body of this function.

Here's what it should do:

- First, it should retrieve the caller address and the identifier of the request. Note that you can access an `event`'s return values through the `returnValues` object. Say your event is defined like this:

  ```
  event TransferTokens(address from, address to, uint256 amount)

  ```

  Then, your JavaScript code that retrieves `from`, `to`, and `amount` should be similar to the following:

  ```
  async function parseEvent (event) {
    const from = event.returnValues.from
    const to = event.returnValues.to
    const amount = event.returnValues.amount
  }

  ```

  Understanding this gets you halfway to understanding the `addRequestToQueue` function🤘🏻.

- Second, the function should pack the `callerAddress` and `id` into an object and then `push` that object to the `pendingRequests` array. Yeah, this sounds like a complicated thing to do. But the good news is that it's not even nearly as complicated as it sounds. Let's look at an example that `push`es an object to an array:

  ```
  let numbers = [ { 1: 'one' }, { 2: 'two' } ]
  numbers.push({ 3: 'three' })
  console.log(numbers)

  ```

  If you run the above snippet, it'll print:

  ```
  [ { '1': 'one' }, { '2': 'two' }, { '3': 'three' } ]

  ```

As you can see, this is a simple function to write. Let's take a stab at it.

## Put It to the Test

1.  Create an `async function` named `addRequestToQueue`. It takes an argument named `event`.
2.  The first two lines of code should store the `callerAddress` and `id` that come from parsing the `event` parameter into two `const`s with the same name. Do this first for `callerAddress`. Our command-line interpreter is pretty basic, and it won't consider the answer correct otherwise.
3.  Let's form an object `{callerAddress, id}` and push it to the `pendingRequests` array. Do this in a single line of code.
