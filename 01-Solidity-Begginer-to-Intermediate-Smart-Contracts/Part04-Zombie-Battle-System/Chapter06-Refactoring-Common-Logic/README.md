# Chapter 6: Refactoring Common Logic

Whoever calls our `attack` function — we want to make sure the user actually owns the zombie they're attacking with. It would be a security concern if you could attack with someone else's zombie!

Can you think of how we would add a check to see if the person calling this function is the owner of the `_zombieId` they're passing in?

Give it some thought, and see if you can come up with the answer on your own.

Take a moment... Refer to some of our previous lessons' code for ideas...

Answer below, don't continue until you've given it some thought.

## The answer

We've done this check multiple times now in previous lessons. In `changeName()`, `changeDna()`, and `feedAndMultiply()`, we used the following check:

```
require(msg.sender == zombieToOwner[_zombieId]);

```

This is the same logic we'll need for our `attack` function. Since we're using the same logic multiple times, let's move this into its own `modifier` to clean up our code and avoid repeating ourselves.

## Put it to the test

We're back to `zombiefeeding.sol`, since this is the first place we used that logic. Let's refactor it into its own `modifier`.

1.  Create a `modifier` called `ownerOf`. It will take 1 argument, `_zombieId` (a `uint`).

    The body should `require` that `msg.sender` is equal to `zombieToOwner[_zombieId]`, then continue with the function. You can refer to `zombiehelper.sol` if you don't remember the syntax for a modifier.

2.  Change the function definition of `feedAndMultiply` such that it uses the modifier `ownerOf`.
3.  Now that we're using a `modifier`, you can remove the line `require(msg.sender == zombieToOwner[_zombieId]);`
