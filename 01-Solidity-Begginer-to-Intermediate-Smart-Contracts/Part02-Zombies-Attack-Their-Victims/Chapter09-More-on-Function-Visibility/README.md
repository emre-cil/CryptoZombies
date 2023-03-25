# Chapter 9: More on Function Visibility

**The code in our previous lesson has a mistake!**

If you try compiling it, the compiler will throw an error.

The issue is we tried calling the `_createZombie` function from within `ZombieFeeding`, but `_createZombie` is a `private` function inside `ZombieFactory`. This means none of the contracts that inherit from `ZombieFactory` can access it.

## Internal and External

In addition to `public` and `private`, Solidity has two more types of visibility for functions: `internal` and `external`.

`internal` is the same as `private`, except that it's also accessible to contracts that inherit from this contract. **(Hey, that sounds like what we want here!)**.

`external` is similar to `public`, except that these functions can ONLY be called outside the contract — they can't be called by other functions inside that contract. We'll talk about why you might want to use `external` vs `public` later.

For declaring `internal` or `external` functions, the syntax is the same as `private` and `public`:

```
contract Sandwich {
  uint private sandwichesEaten = 0;

  function eat() internal {
    sandwichesEaten++;
  }
}

contract BLT is Sandwich {
  uint private baconSandwichesEaten = 0;

  function eatWithBacon() public returns (string memory) {
    baconSandwichesEaten++;
    // We can call this here because it's internal
    eat();
  }
}

```

# Put it to the test

1.  Change `_createZombie()` from `private` to `internal` so our other contract can access it.

    We've already focused you back to the proper tab, `zombiefactory.sol`.
