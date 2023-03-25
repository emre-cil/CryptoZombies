# Chapter 8: More on Function Modifiers

Great! Our zombie now has a functional cooldown timer.

Next, we're going to add some additional helper methods. We've created a new file for you called `zombiehelper.sol`, which imports `zombiefeeding.sol`. This will help to keep our code organized.

Let's make it so zombies gain special abilities after reaching a certain level. But in order to do that, first we'll need to learn a little bit more about function modifiers.

## Function modifiers with arguments

Previously we looked at the simple example of `onlyOwner`. But function modifiers can also take arguments. For example:

```
// A mapping to store a user's age:
mapping (uint => uint) public age;

// Modifier that requires this user to be older than a certain age:
modifier olderThan(uint _age, uint _userId) {
  require(age[_userId] >= _age);
  _;
}

// Must be older than 16 to drive a car (in the US, at least).
// We can call the `olderThan` modifier with arguments like so:
function driveCar(uint _userId) public olderThan(16, _userId) {
  // Some function logic
}

```

You can see here that the `olderThan` modifier takes arguments just like a function does. And that the `driveCar` function passes its arguments to the modifier.

Let's try making our own `modifier` that uses the zombie `level` property to restrict access to special abilities.

## Put it to the test

1.  In `ZombieHelper`, create a `modifier` called `aboveLevel`. It will take 2 arguments, `_level` (a `uint`) and `_zombieId` (also a `uint`).
2.  The body should check to make sure `zombies[_zombieId].level` is greater than or equal to `_level`.
3.  Remember to have the last line of the modifier call the rest of the function with `_;`.
