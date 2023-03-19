# Chapter 10: ERC721 Token Transfers- Two Step Scenario

Now, the `approve` followed by `transferFrom` way to transfer ERC721 tokens is far from being a walk in the park but I'm here to help.

In a nutshell, we have to test two different scenarios:

- Alice approves Bob to take the ERC721 token. Then, Bob (the **approved address**) calls `transferFrom`.
- Alice approves Bob to take the ERC721 token. Next, Alice transfers the ERC721 token.

The difference in the two scenarios lies with _**who**_ calls the actual transfer, Alice or Bob.

We've made it look simple, right?

Let's take a look at the first scenario.

## Bob calls transferFrom

The steps for this scenario are as follows:

- Alice creates a new ERC721 token and then calls `approve`.
- Next, Bob runs `transferFrom` which should make him the owner of the EC721 token.
- Finally, we have to call `assert.equal` with `newOwner` and `bob` as parameters.

# Put it to the test

1.  The first two lines of code of our test are similar to the previous test. We've gone ahead and copy-pasted them for you.
2.  Next, in order to have Bob approved to take the ERC721 token, call `approve()`. The function takes `bob` and `zombieId` as parameters. Also, make sure that Alice calls the method (since it's her ERC721 token that will be transferred).
3.  The last three lines of code are **almost similar** to the previous test. Again, we've gone ahead and copy-pasted them for you. Let's update the `transferFrom()` function call so that the sender is Bob.
4.  Lastly, let's "unskip" this scenario and "skip" the last test case, the one that we still have to code.

Time to run `truffle test` and see if our test passes:

```
Contract: CryptoZombies
    ✓ should be able to create a new zombie (218ms)
    ✓ should not allow two zombies (175ms)
    with the single-step transfer scenario
      ✓ should transfer a zombie (334ms)
    with the two-step transfer scenario
      ✓ should approve and then transfer a zombie when the owner calls transferFrom (360ms)
      - should approve and then transfer a zombie when the approved address calls transferFrom


  4 passing (2s)
  1 pending

```

Awesome! Now, let's move to the next test.
