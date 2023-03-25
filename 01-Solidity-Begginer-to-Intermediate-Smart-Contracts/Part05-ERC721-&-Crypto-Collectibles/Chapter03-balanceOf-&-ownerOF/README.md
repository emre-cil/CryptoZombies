# Chapter 3: balanceOf & ownerOf

Great, let's dive into the ERC721 implementation!

We've gone ahead and copied the empty shell of all the functions you'll be implementing in this lesson.

In this chapter, we're going to implement the first two methods: `balanceOf` and `ownerOf`.

### `balanceOf`

```
  function balanceOf(address _owner) external view returns (uint256 _balance);

```

This function simply takes an `address`, and returns how many tokens that `address` owns.

In our case, our "tokens" are Zombies. Do you remember where in our DApp we stored how many zombies an owner has?

### `ownerOf`

```
  function ownerOf(uint256 _tokenId) external view returns (address _owner);

```

This function takes a token ID (in our case, a Zombie ID), and returns the `address` of the person who owns it.

Again, this is very straightforward for us to implement, since we already have a `mapping` in our DApp that stores this information. We can implement this function in one line, just a `return` statement.

> Note: Remember, `uint256` is equivalent to `uint`. We've been using `uint` in our code up until now, but we're using `uint256` here because we copy/pasted from the spec.

## Putting it to the Test

I'll leave it to you to figure out how to implement these 2 functions.

Each function should simply be 1 line of code, a `return` statement. Take a look at our code from previous lessons to see where we're storing this data. If you can't figure it out, you can hit the "show me the answer" button for some help.

1.  Implement `balanceOf` to return the number of zombies `_owner` has.
2.  Implement `ownerOf` to return the address of whoever owns the zombie with ID `_tokenId`.
