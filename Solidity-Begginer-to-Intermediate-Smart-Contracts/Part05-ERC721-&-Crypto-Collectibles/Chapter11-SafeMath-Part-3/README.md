# Chapter 11: SafeMath Part 3

Great, now our ERC721 implementation is safe from overflows & underflows!

Going back through the code we wrote in previous lessons, there's a few other places in our code that could be vulnerable to overflows or underflows.

For example, in ZombieAttack we have:

```
myZombie.winCount++;
myZombie.level++;
enemyZombie.lossCount++;

```

We should prevent overflows here as well just to be safe. (It's a good idea in general to just use SafeMath instead of the basic math operations. Maybe in a future version of Solidity these will be implemented by default, but for now we have to take extra security precautions in our code).

However we have a slight problem — `winCount` and `lossCount` are `uint16`s, and `level` is a `uint32`. So if we use SafeMath's `add` method with these as arguments, it won't actually protect us from overflow since it will convert these types to `uint256`:

```
function add(uint256 a, uint256 b) internal pure returns (uint256) {
  uint256 c = a + b;
  assert(c >= a);
  return c;
}

// If we call `.add` on a `uint8`, it gets converted to a `uint256`.
// So then it won't overflow at 2^8, since 256 is a valid `uint256`.

```

This means we're going to need to implement 2 more libraries to prevent overflow/underflows with our `uint16`s and `uint32`s. We can call them `SafeMath16` and `SafeMath32`.

The code will be exactly the same as SafeMath, except all instances of `uint256` will be replaced with `uint32` or `uint16`.

We've gone ahead and implemented that code for you — go ahead and look at `safemath.sol` to see the code.

Now we need to implement it in ZombieFactory.

## Putting it to the Test

Assignment:

1.  Declare that we're using `SafeMath32` for `uint32`.
2.  Declare that we're using `SafeMath16` for `uint16`.
3.  There's one more line of code in ZombieFactory where we should use a SafeMath method. We've left a comment to indicate where.
