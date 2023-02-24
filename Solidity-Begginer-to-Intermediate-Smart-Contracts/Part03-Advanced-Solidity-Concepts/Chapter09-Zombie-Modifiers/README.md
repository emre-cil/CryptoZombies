# Chapter 9: Zombie Modifiers

Now let's use our `aboveLevel` modifier to create some functions.

Our game will have some incentives for people to level up their zombies:

- For zombies level 2 and higher, users will be able to change their name.
- For zombies level 20 and higher, users will be able to give them custom DNA.

We'll implement these functions below. Here's the example code from the previous lesson for reference:

```
// A mapping to store a user's age:
mapping (uint => uint) public age;

// Require that this user be older than a certain age:
modifier olderThan(uint _age, uint _userId) {
  require (age[_userId] >= _age);
  _;
}

// Must be older than 16 to drive a car (in the US, at least)
function driveCar(uint _userId) public olderThan(16, _userId) {
  // Some function logic
}

```

## Put it to the test

1.  Create a function called `changeName`. It will take 2 arguments: `_zombieId` (a `uint`), and `_newName` (a `string` with the data location set to `calldata` ), and make it `external`. It should have the `aboveLevel` modifier, and should pass in `2` for the `_level` parameter. (Don't forget to also pass the `_zombieId`).

> Note: `calldata` is somehow similar to `memory`, but it's only available to `external` functions.

2.  In this function, first we need to verify that `msg.sender` is equal to `zombieToOwner[_zombieId]`. Use a `require` statement.
3.  Then the function should set `zombies[_zombieId].name` equal to `_newName`.
4.  Create another function named `changeDna` below `changeName`. Its definition and contents will be almost identical to `changeName`, except its second argument will be `_newDna` (a `uint`), and it should pass in `20` for the `_level` parameter on `aboveLevel`. And of course, it should set the zombie's `dna` to `_newDna` instead of setting the zombie's name.
