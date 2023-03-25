# Chapter 5: Zombie Fightin'

Now that we have a source of some randomness in our contract, we can use it in our zombie battles to calculate the outcome.

Our zombie battles will work as follows:

- You choose one of your zombies, and choose an opponent's zombie to attack.
- If you're the attacking zombie, you will have a 70% chance of winning. The defending zombie will have a 30% chance of winning.
- All zombies (attacking and defending) will have a `winCount` and a `lossCount` that will increment depending on the outcome of the battle.
- If the attacking zombie wins, it levels up and spawns a new zombie.
- If it loses, nothing happens (except its `lossCount` incrementing).
- Whether it wins or loses, the attacking zombie's cooldown time will be triggered.

This is a lot of logic to implement, so we'll do it in pieces over the coming chapters.

## Put it to the test

1.  Give our contract a `uint` variable called `attackVictoryProbability`, and set it equal to `70`.
2.  Create a function called `attack`. It will take two parameters: `_zombieId` (a `uint`) and `_targetId` (also a `uint`). It should be an `external` function.

Leave the function body empty for now.
