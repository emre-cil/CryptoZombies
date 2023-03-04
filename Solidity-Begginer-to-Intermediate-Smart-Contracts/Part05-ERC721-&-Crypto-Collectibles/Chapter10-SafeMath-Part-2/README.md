# Chapter 10: SafeMath Part 2

Let's take a look at the code behind SafeMath:

```
library SafeMath {

  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}

```

First we have the `library` keyword — libraries are similar to `contract`s but with a few differences. For our purposes, libraries allow us to use the `using` keyword, which automatically tacks on all of the library's methods to another data type:

```
using SafeMath for uint;
// now we can use these methods on any uint
uint test = 2;
test = test.mul(3); // test now equals 6
test = test.add(5); // test now equals 11

```

Note that the `mul` and `add` functions each require 2 arguments, but when we declare `using SafeMath for uint`, the `uint` we call the function on (`test`) is automatically passed in as the first argument.

Let's look at the code behind `add` to see what SafeMath does:

```
function add(uint256 a, uint256 b) internal pure returns (uint256) {
  uint256 c = a + b;
  assert(c >= a);
  return c;
}

```

Basically `add` just adds 2 `uint`s like `+`, but it also contains an `assert` statement to make sure the sum is greater than `a`. This protects us from overflows.

`assert` is similar to `require`, where it will throw an error if false. The difference between `assert` and `require` is that `require` will refund the user the rest of their gas when a function fails, whereas `assert` will not. So most of the time you want to use `require` in your code; `assert` is typically used when something has gone horribly wrong with the code (like a `uint` overflow).

So, simply put, SafeMath's `add`, `sub`, `mul`, and `div` are functions that do the basic 4 math operations, but throw an error if an overflow or underflow occurs.

### Using SafeMath in our code.

To prevent overflows and underflows, we can look for places in our code where we use `+`, `-`, `*`, or `/`, and replace them with `add`, `sub`, `mul`, `div`.

Ex. Instead of doing:

```
myUint++;

```

We would do:

```
myUint = myUint.add(1);

```

## Putting it to the Test

We have 2 places in `ZombieOwnership` where we used math operations. Let's swap them out with SafeMath methods.

1.  Replace `++` with a SafeMath method.
2.  Replace `--` with a SafeMath method.
