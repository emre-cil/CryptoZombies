# Chapter 2: Listening for Events

Sweet, you've instantiated your contract🙌🏻! Now you can call its functions.

But let's take a step back, to put things in perspective. Do you remember how your JavaScript application gets notified about new requests?

Well...🤔?

Let me answer that.

The oracle will just fire an event that'll trigger an action. So, before writing the code that calls the oracle contract, your app should first "watch" for events.

Below is a quick refresher on how the oracle emits `GetLatestEthPriceEvent`:

```
function getLatestEthPrice() public returns (uint256) {
  randNonce++;
  uint id = uint(keccak256(abi.encodePacked(now, msg.sender, randNonce))) % modulus;
  pendingRequests[id] = true;
  emit GetLatestEthPriceEvent(msg.sender, id);
  return id;
}

```

Now, every time the oracle fires `GetLatestEthPriceEvent`, your app should pick up that event and `push` it to the `pendingRequests` array.

As an example, here's how you can listen for an event:

```
myContract.events.EventName(async (err, event) => {
  if (err) {
    console.error('Error on event', err)
    return
  }
  // Do something
})

```

The above snippet just listens for an event called `EventName`. For more complex use cases, you could also specify a `filter` like so:

```
myContract.events.EventName({ filter: { myParam: 1 }}, async (err, event) => {
  if (err) {
    console.error('Error on event', err)
    return
  }
  // Do something
})

```

The above triggers only when an event where `myParam` is equal to `1` gets fired.

## Put It to the Test

1.  Declare a function called `filterEvents`. It should take two parameters: `oracleContract` and `web3js`. Make it `async`.
2.  Copy and paste the snippet from above that listens for events. Make the following changes:

    - Update the name of the smart contract
    - Replace `EventName` with `GetLatestEthPriceEvent`
    - Replace the comment with a line of code that calls an `async function` named `addRequestToQueue`. It takes one parameter: `event` and, of course, you'll have to prepend `await`.

3.  While you're here, let's make it so that your function also listens for `SetLatestEthPriceEvent`. It works similarly to the above. The only difference is that, since we won't be using this in this lesson, you don't have to do any processing. Leave the comment in place for now. This will be useful if you decide to add new functionalities sometime later.
