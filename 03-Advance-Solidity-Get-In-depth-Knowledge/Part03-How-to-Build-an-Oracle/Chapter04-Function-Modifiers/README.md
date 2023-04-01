# Chapter 4: Function Modifiers

Did you manage to identify the security issue in the previous chapter?

If not, let me help you with the answer: when you're writing a `public` function, anyone could execute it... and set the oracle's address to whatever they want.

But how can you fix that?

## The onlyOwner Function Modifier

Here's the solution: you must use something called a `modifier`. A modifier is a piece of code that changes the behavior of a function. As an example, you can check that a particular condition is met before the actual function gets executed.

So, fixing this security hole requires you to follow the following steps:

- Import the content of the OpenZeppelin's `Ownable` smart contract. We've covered OpenZeppelin in our previous lessons, just go back and refresh your memory if need be.
- Make the contract inherit from `Ownable`.
- Change the definition of the `setOracleInstanceAddress` function so that it uses the `onlyOwner` modifier.

Here's how using a modifier looks like:

```

contract MyContract {
  function doSomething public onlyMe {
    // do something
  }
}

```

In this example, the `onlyMe` modifier is executed first, before the code inside the `doSomething` function.

Pretty easy! Now it's your turn to put it in practice😉.

## Put It to the Test

1.  Modify the code to `import` the contents of "openzeppelin-solidity/contracts/ownership/Ownable.sol"
2.  To make the contract inherit from `Ownable`, you must append `is Ownable` to its definition as follows:

    ```
    contract MyContract is Ownable {
    }

    ```

3.  Attach the `onlyOwner` modifier's name at the end of the `setOracleInstanceAddress` function definition.
4.  While you're here, you would want to fire an event so that the front-end gets notified every time the oracle address is changed. We went ahead and declared an event named `newOracleAddressEvent`. The last line of the `setOracleInstanceAddress` function should emit `newOracleAddressEvent`. Pass it `oracleAddress` as an argument.
