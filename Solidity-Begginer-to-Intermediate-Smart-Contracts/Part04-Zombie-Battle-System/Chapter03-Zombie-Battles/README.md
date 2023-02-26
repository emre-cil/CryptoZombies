# Chapter 3: Zombie Battles

Now that we've learned about payable functions and contract balances, it's time to add functionality for zombie battles!

Following the format from previous chapters, we'll organize our code by creating a new file / contract for the attack functionality that imports from the previous contract.

## Put it to the test

Let's review creating a new contract. Repetition leads to mastery!

If you can't remember the syntax for doing these, check `zombiehelper.sol` for the syntax — but try to do it without peeking first to test your knowledge.

1.  Declare at the top of the file that we're using Solidity version `>=0.5.0 <0.6.0`.
2.  `import` from `zombiehelper.sol`.
3.  Declare a new `contract` called `ZombieAttack` that inherits from `ZombieHelper`. Leave the contract body empty for now.
