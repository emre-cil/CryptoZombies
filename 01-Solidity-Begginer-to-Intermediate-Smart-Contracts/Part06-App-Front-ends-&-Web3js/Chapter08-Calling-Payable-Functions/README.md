# Chapter 8: Calling Payable Functions

The logic for `attack`, `changeName`, and `changeDna` will be extremely similar, so they're trivial to implement and we won't spend time coding them in this lesson.

> In fact, there's already a lot of repetitive logic in each of these function calls, so it would probably make sense to refactor and put the common code in its own function. (And use a templating system for the `txStatus` messages — already we're seeing how much cleaner things would be with a framework like Vue.js!)

Let's look at another type of function that requires special treatment in Web3.js — `payable` functions.

## Level Up!

Recall in `ZombieHelper`, we added a payable function where the user can level up:

```
function levelUp(uint _zombieId) external payable {
  require(msg.value == levelUpFee);
  zombies[_zombieId].level++;
}

```

The way to send Ether along with a function is simple, with one caveat: we need to specify how much to send in `wei`, not Ether.

## What's a Wei?

A `wei` is the smallest sub-unit of Ether — there are 10^18 `wei` in one `ether`.

That's a lot of zeroes to count — but luckily Web3.js has a conversion utility that does this for us.

```
// This will convert 1 ETH to Wei
web3js.utils.toWei("1");

```

In our DApp, we set `levelUpFee = 0.001 ether`, so when we call our `levelUp` function, we can make the user send `0.001` Ether along with it using the following code:

```
cryptoZombies.methods.levelUp(zombieId)
.send({ from: userAccount, value: web3js.utils.toWei("0.001", "ether") })

```

## Put it to the Test

Let's add a `levelUp` function below `feedOnKitty`. The code will be very similar to `feedOnKitty`, but:

1.  The function will take 1 parameter, `zombieId`
2.  Pre-transaction, it should display the `txStatus` text `"Leveling up your zombie..."`
3.  When it calls `levelUp` on the contract, it should send `"0.001"` ETH converted `toWei`, as in the example above
4.  Upon success it should display the text `"Power overwhelming! Zombie successfully leveled up"`
5.  We **don't** need to redraw the UI by querying our smart contract with `getZombiesByOwner` — because in this case we know the only thing that's changed is the one zombie's level.
