# Chapter 13: Comments

The Solidity code for our zombie game is finally finished!

In the next lessons, we'll look at how to deploy the code to Ethereum, and how to interact with it with Web3.js.

But one final thing before we let you go in Lesson 5: Let's talk about **commenting your code**.

## Syntax for comments

Commenting in Solidity is just like JavaScript. You've already seen some examples of single line comments throughout the CryptoZombies lessons:

```
// This is a single-line comment. It's kind of like a note to self (or to others)

```

Just add double `//` anywhere and you're commenting. It's so easy that you should do it all the time.

But I hear you — sometimes a single line is not enough. You are born a writer, after all!

Thus we also have multi-line comments:

```
contract CryptoZombies {
  /* This is a multi-lined comment. I'd like to thank all of you
    who have taken your time to try this programming course.
    I know it's free to all of you, and it will stay free
    forever, but we still put our heart and soul into making
    this as good as it can be.

    Know that this is still the beginning of Blockchain development.
    We've come very far but there are so many ways to make this
    community better. If we made a mistake somewhere, you can
    help us out and open a pull request here:
    https://github.com/loomnetwork/cryptozombie-lessons

    Or if you have some ideas, comments, or just want to say
    hi - drop by our Telegram community at https://t.me/loomnetworkdev
  */
}

```

In particular, it's good practice to comment your code to explain the expected behavior of every function in your contract. This way another developer (or you, after a 6 month hiatus from a project!) can quickly skim and understand at a high level what your code does without having to read the code itself.

The standard in the Solidity community is to use a format called **_natspec_**, which looks like this:

```
/// @title A contract for basic math operations
/// @author H4XF13LD MORRIS 💯💯😎💯💯
/// @notice For now, this contract just adds a multiply function
contract Math {
  /// @notice Multiplies 2 numbers together
  /// @param x the first uint.
  /// @param y the second uint.
  /// @return z the product of (x * y)
  /// @dev This function does not currently check for overflows
  function multiply(uint x, uint y) returns (uint z) {
    // This is just a normal comment, and won't get picked up by natspec
    z = x * y;
  }
}

```

`@title` and `@author` are straightforward.

`@notice` explains to a **user** what the contract / function does. `@dev` is for explaining extra details to developers.

`@param` and `@return` are for describing what each parameter and return value of a function are for.

Note that you don't always have to use all of these tags for every function — all tags are optional. But at the very least, leave a `@dev` note explaining what each function does.

# Put it to the test

If you haven't noticed by now, the CryptoZombies answer-checker ignores comments when it checks your answers. So we can't actually check your natspec code for this chapter ;)

However, by now you're a Solidity whiz — we're just going to assume you've got this!

Give it a try anyway, and try adding some natspec tags to `ZombieOwnership`:

1.  `@title` — E.g. A contract that manages transfering zombie ownership
2.  `@author` — Your name!
3.  `@dev` — E.g. Compliant with OpenZeppelin's implementation of the ERC721 spec draft
