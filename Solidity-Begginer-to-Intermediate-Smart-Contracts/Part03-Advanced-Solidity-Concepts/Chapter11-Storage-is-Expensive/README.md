# Chapter 11: Storage is Expensive

One of the more expensive operations in Solidity is using `storage` — particularly writes.

This is because every time you write or change a piece of data, it’s written permanently to the blockchain. Forever! Thousands of nodes across the world need to store that data on their hard drives, and this amount of data keeps growing over time as the blockchain grows. So there's a cost to doing that.

In order to keep costs down, you want to avoid writing data to storage except when absolutely necessary. Sometimes this involves seemingly inefficient programming logic — like rebuilding an array in `memory` every time a function is called instead of simply saving that array in a variable for quick lookups.

In most programming languages, looping over large data sets is expensive. But in Solidity, this is way cheaper than using `storage` if it's in an `external view` function, since `view` functions don't cost your users any gas. (And gas costs your users real money!).

We'll go over `for` loops in the next chapter, but first, let's go over how to declare arrays in memory.

## Declaring arrays in memory

You can use the `memory` keyword with arrays to create a new array inside a function without needing to write anything to storage. The array will only exist until the end of the function call, and this is a lot cheaper gas-wise than updating an array in `storage` — free if it's a `view` function called externally.

Here's how to declare an array in memory:

```
function getArray() external pure returns(uint[] memory) {
  // Instantiate a new array in memory with a length of 3
  uint[] memory values = new uint[](3);

  // Put some values to it
  values[0] = 1;
  values[1] = 2;
  values[2] = 3;

  return values;
}

```

This is a trivial example just to show you the syntax, but in the next chapter we'll look at combining this with `for` loops for real use-cases.

> Note: memory arrays **must** be created with a length argument (in this example, `3`). They currently cannot be resized like storage arrays can with `array.push()`, although this may be changed in a future version of Solidity.

## Put it to the test

In our `getZombiesByOwner` function, we want to return a `uint[]` array with all the zombies a particular user owns.

1.  Declare a `uint[] memory` variable called `result`
2.  Set it equal to a new `uint` array. The length of the array should be how many zombies this `_owner` owns, which we can look up from our `mapping` with: `ownerZombieCount[_owner]`.
3.  At the end of the function return `result`. It's just an empty array right now, but in the next chapter we'll fill it in.
