# Chapter 4: Refactoring

Uh oh! We've just introduced an error in our code that will make it not compile. Did you notice it?

In the previous chapter we defined a function called `ownerOf`. But if you recall from Lesson 4, we also created a `modifier` with the same name, `ownerOf`, in `zombiefeeding.sol`.

If you tried compiling this code, the compiler would give you an error saying you can't have a modifier and a function with the same name.

So should we just change the function name in `ZombieOwnership` to something else?

No, we can't do that!!! Remember, we're using the ERC721 token standard, which means other contracts will expect our contract to have functions with these exact names defined. That's what makes these standards useful — if another contract knows our contract is ERC721-compliant, it can simply talk to us without needing to know anything about our internal implementation decisions.

So that means we'll have to refactor our code from Lesson 4 to change the name of the `modifier` to something else.

## Putting it to the Test

We're back in `zombiefeeding.sol`. We're going to change the name of our `modifier` from `ownerOf` to `onlyOwnerOf`.

1.  Change the name of the modifier definition to `onlyOwnerOf`
2.  Scroll down to the function `feedAndMultiply`, which uses this modifier. We'll need to change the name here as well.

> Note: We also use this modifier in `zombiehelper.sol` and `zombieattack.sol`, but so we don't spend too much of this lesson refactoring, we've gone ahead and changed the modifier names in those files for you.
