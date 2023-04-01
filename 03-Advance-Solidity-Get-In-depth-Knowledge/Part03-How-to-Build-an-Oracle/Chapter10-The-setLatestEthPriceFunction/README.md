# Chapter 10: The setLatestEthPrice Function

Awesome! In this chapter, you'll be putting together what you've learned so far to write the `setLatestEthPrice` function. This is going be a bit more complex, but there's nothing to be afraid of. I'll avoid big leaps of thought and make sure each step is well explained.

So, the JavaScript component of the oracle (the one we'll write in the next lesson) retrieves the ETH price from the Binance public API and then calls the `setLatestEthPrice`, passing it the following arguments:

- The ETH price,
- The address of the contract that initiated the request
- The `id` of the request.

First, your function must make sure that only the owner can call this function. Then, similarly to the code you've written in Chapter 6, your function should check whether the request `id` is valid. If so, it should remove it from `pendingRequests`.

## Put It to the Test

1.  Create a `public function` named `setLatestEthPrice`. It should take three parameters: `_ethPrice` (a `uint256`), `_callerAddress` (an `address`), and `_id` (a `uint256`). Don't forget to make it so that only the owner could call it.
2.  Use `require` to check if `pendingRequests[_id]` is `true`. The second parameter should be "This request is not in my pending list.". If you don't know how to do this, revisit Chapter 6 to refresh your memory.
3.  Remove `id` from the `pendingRequests` mapping. In case you're stuck, here's how you can remove a key from a mapping:

    ```
    delete myMapping[myId];

    ```

We're going to continue defining the `setLatestEthPrice` function in the next chapter.
