# Chapter 4: Math Operations

Math in Solidity is pretty straightforward. The following operations are the same as in most programming languages:

- Addition: `x + y`
- Subtraction: `x - y`,
- Multiplication: `x * y`
- Division: `x / y`
- Modulus / remainder: `x % y` _(for example, `13 % 5` is `3`, because if you divide 5 into 13, 3 is the remainder)_

Solidity also supports an **_exponential operator_** (i.e. "x to the power of y", x^y):

```
uint x = 5 ** 2; // equal to 5^2 = 25

```

# Put it to the test

To make sure our Zombie's DNA is only 16 characters, let's make another `uint` equal to 10^16. That way we can later use the modulus operator `%` to shorten an integer to 16 digits.

1.  Create a `uint` named `dnaModulus`, and set it equal to **10 to the power of `dnaDigits`**.
