# Chapter 12: Handling Multiple Return Values

This `getKitty` function is the first example we've seen that returns multiple values. Let's look at how to handle them:

```
function multipleReturns() internal returns(uint a, uint b, uint c) {
  return (1, 2, 3);
}

function processMultipleReturns() external {
  uint a;
  uint b;
  uint c;
  // This is how you do multiple assignment:
  (a, b, c) = multipleReturns();
}

// Or if we only cared about one of the values:
function getLastReturnValue() external {
  uint c;
  // We can just leave the other fields blank:
  (,,c) = multipleReturns();
}

```

# Put it to the test

Time to interact with the CryptoKitties contract!

Let's make a function that gets the kitty genes from the contract:

1.  Make a function called `feedOnKitty`. It will take 2 `uint` parameters, `_zombieId` and `_kittyId`, and should be a `public` function.
2.  The function should first declare a `uint` named `kittyDna`.

    > Note: In our `KittyInterface`, `genes` is a `uint256` — but if you remember back to lesson 1, `uint` is an alias for `uint256` — they're the same thing.

3.  The function should then call the `kittyContract.getKitty` function with `_kittyId` and store `genes` in `kittyDna`. Remember — `getKitty` returns a ton of variables. (10 to be exact — I'm nice, I counted them for you!). But all we care about is the last one, `genes`. Count your commas carefully!
4.  Finally, the function should call `feedAndMultiply`, and pass it both `_zombieId` and `kittyDna`.
