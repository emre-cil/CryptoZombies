# Chapter 12: For Loops

In the previous chapter, we mentioned that sometimes you'll want to use a `for` loop to build the contents of an array in a function rather than simply saving that array to storage.

Let's look at why.

For our `getZombiesByOwner` function, a naive implementation would be to store a `mapping` of owners to zombie armies in the `ZombieFactory` contract:

```
mapping (address => uint[]) public ownerToZombies

```

Then every time we create a new zombie, we would simply use `ownerToZombies[owner].push(zombieId)` to add it to that owner's zombies array. And `getZombiesByOwner` would be a very straightforward function:

```
function getZombiesByOwner(address _owner) external view returns (uint[] memory) {
  return ownerToZombies[_owner];
}

```

### The problem with this approach

This approach is tempting for its simplicity. But let's look at what happens if we later add a function to transfer a zombie from one owner to another (which we'll definitely want to add in a later lesson!).

That transfer function would need to:

1.  Push the zombie to the new owner's `ownerToZombies` array,
2.  Remove the zombie from the old owner's `ownerToZombies` array,
3.  Shift every zombie in the older owner's array up one place to fill the hole, and then
4.  Reduce the array length by 1.

Step 3 would be extremely expensive gas-wise, since we'd have to do a write for every zombie whose position we shifted. If an owner has 20 zombies and trades away the first one, we would have to do 19 writes to maintain the order of the array.

Since writing to storage is one of the most expensive operations in Solidity, every call to this transfer function would be extremely expensive gas-wise. And worse, it would cost a different amount of gas each time it's called, depending on how many zombies the user has in their army and the index of the zombie being traded. So the user wouldn't know how much gas to send.

> Note: Of course, we could just move the last zombie in the array to fill the missing slot and reduce the array length by one. But then we would change the ordering of our zombie army every time we made a trade.

Since `view` functions don't cost gas when called externally, we can simply use a for-loop in `getZombiesByOwner` to iterate the entire zombies array and build an array of the zombies that belong to this specific owner. Then our `transfer` function will be much cheaper, since we don't need to reorder any arrays in storage, and somewhat counter-intuitively this approach is cheaper overall.

## Using `for` loops

The syntax of `for` loops in Solidity is similar to JavaScript.

Let's look at an example where we want to make an array of even numbers:

```
function getEvens() pure external returns(uint[] memory) {
  uint[] memory evens = new uint[](5);
  // Keep track of the index in the new array:
  uint counter = 0;
  // Iterate 1 through 10 with a for loop:
  for (uint i = 1; i <= 10; i++) {
    // If `i` is even...
    if (i % 2 == 0) {
      // Add it to our array
      evens[counter] = i;
      // Increment counter to the next empty index in `evens`:
      counter++;
    }
  }
  return evens;
}

```

This function will return an array with the contents `[2, 4, 6, 8, 10]`.

## Put it to the test

Let's finish our `getZombiesByOwner` function by writing a `for` loop that iterates through all the zombies in our DApp, compares their owner to see if we have a match, and pushes them to our `result` array before returning it.

1.  Declare a `uint` called `counter` and set it equal to `0`. We'll use this variable to keep track of the index in our `result` array.
2.  Declare a `for` loop that starts from `uint i = 0` and goes up through `i < zombies.length`. This will iterate over every zombie in our array.
3.  Inside the `for` loop, make an `if` statement that checks if `zombieToOwner[i]` is equal to `_owner`. This will compare the two addresses to see if we have a match.
4.  Inside the `if` statement:

    1.  Add the zombie's ID to our `result` array by setting `result[counter]` equal to `i`.
    2.  Increment `counter` by 1 (see the `for` loop example above).

That's it — the function will now return all the zombies owned by `_owner` without spending any gas.
