
# Chapter 9: Preventing Overflows

Congratulations, that completes our ERC721 and ERC721x implementation!

That wasn't so tough, was it? A lot of this Ethereum stuff sounds really complicated when you hear people talking about it, so the best way to understand it is to actually go through an implementation of it yourself.

Keep in mind that this is only a minimal implementation. There are extra features we may want to add to our implementation, such as some extra checks to make sure users don't accidentally transfer their zombies to address  `0`  (which is called "burning" a token — basically it's sent to an address that no one has the private key of, essentially making it unrecoverable). Or to put some basic auction logic in the DApp itself. (Can you think of some ways we could implement that?)

But we wanted to keep this lesson manageable, so we went with the most basic implementation. If you want to see an example of a more in-depth implementation, you can take a look at the OpenZeppelin ERC721 contract after this tutorial.

### Contract security enhancements: Overflows and Underflows

We're going to look at one major security feature you should be aware of when writing smart contracts: Preventing overflows and underflows.

What's an  **_overflow_**?

Let's say we have a  `uint8`, which can only have 8 bits. That means the largest number we can store is binary  `11111111`  (or in decimal, 2^8 - 1 = 255).

Take a look at the following code. What is  `number`  equal to at the end?

```
uint8 number = 255;
number++;

```

In this case, we've caused it to overflow — so  `number`  is counterintuitively now equal to  `0`  even though we increased it. (If you add 1 to binary  `11111111`, it resets back to  `00000000`, like a clock going from  `23:59`  to  `00:00`).

An underflow is similar, where if you subtract  `1`  from a  `uint8`  that equals  `0`, it will now equal  `255`  (because  `uint`s are unsigned, and cannot be negative).

While we're not using  `uint8`  here, and it seems unlikely that a  `uint256`  will overflow when incrementing by  `1`  each time (2^256 is a really big number), it's still good to put protections in our contract so that our DApp never has unexpected behavior in the future.

### Using SafeMath

To prevent this, OpenZeppelin has created a  **_library_**  called SafeMath that prevents these issues by default.

But before we get into that... What's a library?

A  **_library_**  is a special type of contract in Solidity. One of the things it is useful for is to attach functions to native data types.

For example, with the SafeMath library, we'll use the syntax  `using SafeMath for uint256`. The SafeMath library has 4 functions —  `add`,  `sub`,  `mul`, and  `div`. And now we can access these functions from  `uint256`  as follows:

```
using SafeMath for uint256;

uint256 a = 5;
uint256 b = a.add(3); // 5 + 3 = 8
uint256 c = a.mul(2); // 5 * 2 = 10

```

We'll look at what these functions do in the next chapter, but for now let's add the SafeMath library to our contract.

## Putting it to the Test

We've already included OpenZeppelin's  `SafeMath`  library for you in  `safemath.sol`. You can take a quick peek at the code now if you want to, but we'll be looking at it in depth in the next chapter.

First let's tell our contract to use SafeMath. We'll do this in ZombieFactory, our very base contract — that way we can use it in any of the sub-contracts that inherit from this one.

1.  Import  `safemath.sol`  into  `zombiefactory.sol`.
    
2.  Add the declaration  `using SafeMath for uint256;`.