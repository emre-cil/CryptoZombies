# Chapter 10: The requestRandomness and fulfillRandomness functions

Perfect! Now we can create our function that calls the Chainlink node.

Remember, the Chainlink VRF follows the basic request model, so we need to define:

1.  A function to request the random number
2.  A function for the Chainlink node to return the random number to.

Remember, the Chainlink node is actually going to call the VRF Coordinator first to verify the number is random, then the VRF Coordinator will be the one to call our `ZombieFactory` contract.

Since we are importing the `VRFConsumerBase` contract, we can use the two built in functions that do both of these!

A. `requestRandomness`

1.  This function checks to see that our contract has `LINK` tokens to pay a Chainlink node
2.  Then, it sends some `LINK` tokens to the Chainlink node
3.  Emits an event that the Chainlink node is looking for
4.  Assigns a `requestId` to our request for a random number on-chain

B. `fulfillRandomness`

1.  The Chainlink node first calls a function on the VRF Coordinator and includes a random number
2.  The VRF Coordinator checks to see if the number is random
3.  Then, it returns the random number the Chainlink node created, along with the original requestID from our request

So, let's create these two functions in our contract.

## Putting it to the test

1.  Create a function named `getRandomNumber`. It is a `public` function that returns a variable named `requestId` of type `bytes32`. The body of the function returns the value you get from calling the `requestRandomness` function, passing it two parameters: `keyHash` and `fee`. Let's do it in one line of code to keep things clean. For more details, see the see the [Get a Random Number](https://docs.chain.link/docs/get-a-random-number/) page of the Chainlink documentation.

2.  Create an `internal override` function named `fulfillRandomness` that takes two arguments: `requestId` of type `bytes32` and `randomness` of type `uint256`. This function assigns the response of the Chainlink (the `randomness` argument) node to the `randomResult` variable.

> Note: Why did we make this function `internal override`? That's because only the VRF Coordinator contract calls this function.
