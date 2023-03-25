# Chapter 8: Back to Attack!

Enough refactoring — back to `zombieattack.sol`.

We're going to continue defining our `attack` function, now that we have the `ownerOf` modifier to use.

## Put it to the test

1.  Add the `ownerOf` modifier to `attack` to make sure the caller owns `_zombieId`.
2.  The first thing our function should do is get a `storage` pointer to both zombies so we can more easily interact with them:

    a. Declare a `Zombie storage` named `myZombie`, and set it equal to `zombies[_zombieId]`.

    b. Declare a `Zombie storage` named `enemyZombie`, and set it equal to `zombies[_targetId]`.

3.  We're going to use a random number between 0 and 99 to determine the outcome of our battle. So declare a `uint` named `rand`, and set it equal to the result of the `randMod` function with `100` as an argument.
