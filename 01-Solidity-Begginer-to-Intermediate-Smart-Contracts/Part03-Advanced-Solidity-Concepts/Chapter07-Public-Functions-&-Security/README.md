# Chapter 7: Public Functions & Security

Now let's modify `feedAndMultiply` to take our cooldown timer into account.

Looking back at this function, you can see we made it `public` in the previous lesson. An important security practice is to examine all your `public` and `external` functions, and try to think of ways users might abuse them. Remember — unless these functions have a modifier like `onlyOwner`, any user can call them and pass them any data they want to.

Re-examining this particular function, the user could call the function directly and pass in any `_targetDna` or `_species` they want to. This doesn't seem very game-like — we want them to follow our rules!

On closer inspection, this function only needs to be called by `feedOnKitty()`, so the easiest way to prevent these exploits is to make it `internal`.

## Put it to the test

1.  Currently `feedAndMultiply` is a `public` function. Let's make it `internal` so that the contract is more secure. We don't want users to be able to call this function with any DNA they want.
2.  Let's make `feedAndMultiply` take our `cooldownTime` into account. First, after we look up `myZombie`, let's add a `require` statement that checks `_isReady()` and passes `myZombie` to it. This way the user can only execute this function if a zombie's cooldown time is over.
3.  At the end of the function let's call `_triggerCooldown(myZombie)` so that feeding triggers the zombie's cooldown time.
