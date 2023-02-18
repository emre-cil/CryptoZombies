# Chapter 8: Zombie DNA

Let's finish writing the `feedAndMultiply` function.

The formula for calculating a new zombie's DNA is simple: the average between the feeding zombie's DNA and the target's DNA.

For example:

```
function testDnaSplicing() public {
  uint zombieDna = 2222222222222222;
  uint targetDna = 4444444444444444;
  uint newZombieDna = (zombieDna + targetDna) / 2;
  // ^ will be equal to 3333333333333333
}

```

Later we can make our formula more complicated if we want to, like adding some randomness to the new zombie's DNA. But for now we'll keep it simple — we can always come back to it later.

# Put it to the test

1.  First we need to make sure that `_targetDna` isn't longer than 16 digits. To do this, we can set `_targetDna` equal to `_targetDna % dnaModulus` to only take the last 16 digits.
2.  Next our function should declare a `uint` named `newDna`, and set it equal to the average of `myZombie`'s DNA and `_targetDna` (as in the example above).

    > Note: You can access the properties of `myZombie` using `myZombie.name` and `myZombie.dna`

3.  Once we have the new DNA, let's call `_createZombie`. You can look at the `zombiefactory.sol` tab if you forget which parameters this function needs to call it. Note that it requires a name, so let's set our new zombie's name to `"NoName"` for now — we can write a function to change zombies' names later.

> Note: For you Solidity whizzes, you may notice a problem with our code here! Don't worry, we'll fix this in the next chapter ;)
