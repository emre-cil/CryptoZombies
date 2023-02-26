# Chapter 9: Zombie Wins and Losses

For our zombie game, we're going to want to keep track of how many battles our zombies have won and lost. That way we can maintain a "zombie leaderboard" in our game state.

We could store this data in a number of ways in our DApp — as individual mappings, as leaderboard Struct, or in the `Zombie` struct itself.

Each has its own benefits and tradeoffs depending on how we intend on interacting with the data. In this tutorial, we're going to store the stats on our `Zombie` struct for simplicity, and call them `winCount` and `lossCount`.

So let's jump back to `zombiefactory.sol`, and add these properties to our `Zombie` struct.

## Put it to the test

1.  Modify our `Zombie` struct to have 2 more properties:

    a. `winCount`, a `uint16`

    b. `lossCount`, also a `uint16`

    > Note: Remember, since we can pack `uint`s inside structs, we want to use the smallest `uint`s we can get away with. A `uint8` is too small, since 2^8 = 256 — if our zombies attacked once per day, they could overflow this within a year. But 2^16 is 65536 — so unless a user wins or loses every day for 179 years straight, we should be safe here.

2.  Now that we have new properties on our `Zombie` struct, we need to change our function definition in `_createZombie()`.

    Change the zombie creation definition so it creates each new zombie with `0` wins and `0` losses.
