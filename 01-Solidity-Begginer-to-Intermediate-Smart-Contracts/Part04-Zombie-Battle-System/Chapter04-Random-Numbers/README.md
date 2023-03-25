# Chapter 4: Random Numbers

Great! Now let's figure out the battle logic.

All good games require some level of randomness. So how do we generate random numbers in Solidity?

The real answer here is, you can't. Well, at least you can't do it safely.

Let's look at why.

## Random number generation via `keccak256`

The best source of randomness we have in Solidity is the `keccak256` hash function.

We could do something like the following to generate a random number:

```
// Generate a random number between 1 and 100:
uint randNonce = 0;
uint random = uint(keccak256(abi.encodePacked(now, msg.sender, randNonce))) % 100;
randNonce++;
uint random2 = uint(keccak256(abi.encodePacked(now, msg.sender, randNonce))) % 100;

```

What this would do is take the timestamp of `now`, the `msg.sender`, and an incrementing `nonce` (a number that is only ever used once, so we don't run the same hash function with the same input parameters twice).

It would then "pack" the inputs and use `keccak` to convert them to a random hash. Next, it would convert that hash to a `uint`, and then use `% 100` to take only the last 2 digits. This will give us a totally random number between 0 and 99.

### This method is vulnerable to attack by a dishonest node

In Ethereum, when you call a function on a contract, you broadcast it to a node or nodes on the network as a **_transaction_**. The nodes on the network then collect a bunch of transactions, try to be the first to solve a computationally-intensive mathematical problem as a "Proof of Work", and then publish that group of transactions along with their Proof of Work (PoW) as a **_block_** to the rest of the network.

Once a node has solved the PoW, the other nodes stop trying to solve the PoW, verify that the other node's list of transactions are valid, and then accept the block and move on to trying to solve the next block.

**This makes our random number function exploitable.**

Let's say we had a coin flip contract — heads you double your money, tails you lose everything. Let's say it used the above random function to determine heads or tails. (`random >= 50` is heads, `random < 50` is tails).

If I were running a node, I could publish a transaction **only to my own node** and not share it. I could then run the coin flip function to see if I won — and if I lost, choose not to include that transaction in the next block I'm solving. I could keep doing this indefinitely until I finally won the coin flip and solved the next block, and profit.

## So how do we generate random numbers safely in Ethereum?

Because the entire contents of the blockchain are visible to all participants, this is a hard problem, and its solution is beyond the scope of this tutorial. You can read [this StackOverflow thread](https://ethereum.stackexchange.com/questions/191/how-can-i-securely-generate-a-random-number-in-my-smart-contract) for some ideas. One idea would be to use an **_oracle_** to access a random number function from outside of the Ethereum blockchain.

Of course, since tens of thousands of Ethereum nodes on the network are competing to solve the next block, my odds of solving the next block are extremely low. It would take me a lot of time or computing resources to exploit this profitably — but if the reward were high enough (like if I could bet $100,000,000 on the coin flip function), it would be worth it for me to attack.

So while this random number generation is NOT secure on Ethereum, in practice unless our random function has a lot of money on the line, the users of your game likely won't have enough resources to attack it.

Because we're just building a simple game for demo purposes in this tutorial and there's no real money on the line, we're going to accept the tradeoffs of using a random number generator that is simple to implement, knowing that it isn't totally secure.

In a future lesson, we may cover using **_oracles_** (a secure way to pull data in from outside of Ethereum) to generate secure random numbers from outside the blockchain.

## Put it to the test

Let's implement a random number function we can use to determine the outcome of our battles, even if it isn't totally secure from attack.

1.  Give our contract a `uint` called `randNonce`, and set it equal to `0`.
2.  Create a function called `randMod` (random-modulus). It will be an `internal` function that takes a `uint` named `_modulus`, and `returns` a `uint`.
3.  The function should first increment `randNonce` (using the syntax `randNonce++`).
4.  Finally, it should (in one line of code) calculate the `uint` typecast of the `keccak256` hash of `abi.encodePacked(now,msg.sender,randNonce)` — and `return` that value `% _modulus`. (Whew! That was a mouthful. If you didn't follow that, just take a look at the example above where we generated a random number — the logic is very similar).
