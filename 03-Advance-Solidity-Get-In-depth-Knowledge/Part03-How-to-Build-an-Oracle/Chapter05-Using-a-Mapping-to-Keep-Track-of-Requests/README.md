# Chapter 5: Using a Mapping to Keep Track of Requests

Great, you've finished off the `setOracleInstanceAddress` function!

Now, your front-end can call it to set the address of the oracle.

Next, let's look into how the ETH price gets updated.

To initiate an ETH price update, the smart contract should call the `getLatestEthPrice` function of the oracle. Now, due to its asynchronous nature, there's no way the `getLatestEthPrice` function can return this bit of information. What it does return instead, is a unique `id` for every request. Then, the oracle goes ahead and fetches the ETH price from the Binance API and executes a `callback` function exposed by the caller contract. Lastly, the `callback` function updates the ETH price in the caller contract.

This is a **_really important point_**, so spend a few minutes thinking about it before moving forward.

Now, does implementing this sound like a hard problem? Actually, the way this works is so easy it'll surprise you. Just bear with me for the next two chapters🤓.

## Mappings

Every user of your dapp can initiate an operation that'll require the caller contract to make request to update the ETH price. Since the caller has no control over when it'll get a response, you must find a way to keep track of these pending requests. Doing so, you'll be able to make sure that each call to the `callback` function is associated with a legit request.

To keep track of requests, you will use a mapping called `myRequests`. In Solidity, a mapping is basically a hash table in which all possible keys exist. But there's a catch. Initially, each value is initialized with the type's default value.

You can define a mapping using something like the following:

```
mapping(address => uint) public balances;

```

Can you guess what this snippet does? Well... as said, it sets the balance of all possible `addresses` to `0`. Why 0? Because that's the default value for `uint`.

Setting the balance for `msg.sender` to `someNewValue` is as simple as:

```
balances[msg.sender] = someNewValue

```

## Put It to the Test

We've gone ahead and declared the `myRequests` mapping for you. The key is an `uint256` and the value a `bool`. We've also declared an event named `ReceivedNewRequestIdEvent`.

1.  Make a function called `updateEthPrice`. It doesn't take any parameters, and it should be a `public` function.
2.  The first line of your function should call the `oracleInstance.getLatestEthPrice` function. Store the returned value in a `uint256` called `id`.
3.  Next, set the `myRequests` mapping for `id` to `true`.
4.  The last line of your function should fire the `ReceivedNewRequestIdEvent` event. Pass it `id` as an argument.
