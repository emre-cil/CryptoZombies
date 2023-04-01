# Chapter 9: The getLatestEthPrice Function - Cont'd

Great job, you've computed the request `id`.

Next, you would want to implement a simple system that keeps tracks of pending requests. Just like you did for the caller contract, for this you'll be using a mapping. This time let's call it `pendingRequests`.

The `getLatestEthPrice` function should also fire an event and, lastly, it should return the request `id`.

Let's see how you can implement this in code.

## Put It to the Test

We've gone ahead and defined a mapping called `pendingRequests`. The key is a `uint` (the random number) and the value is a `bool`.

1.  First, you'll want to change the `pendingRequests` mapping for this `id` to `true`.
2.  Let's `emit` `GetLatestEthPriceEvent`. It should pass the following parameters: `msg.sender` (an `address`) and `id` (a `uint256`).
3.  Finally, the function should `return id`.
