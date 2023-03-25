# Chapter 11: Zombie Loss 😞

Now that we've coded what happens when your zombie wins, let's figure out what happens when it **loses**.

In our game, when zombies lose, they don't level down — they simply add a loss to their `lossCount`, and their cooldown is triggered so they have to wait a day before attacking again.

To implement this logic, we'll need an `else` statement.

`else` statements are written just like in JavaScript and many other languages:

```
if (zombieCoins[msg.sender] > 100000000) {
  // You rich!!!
} else {
  // We require more ZombieCoins...
}

```

## Put it to the test

1.  Add an `else` statement. If our zombie loses:

    a. Increment `myZombie`'s `lossCount`.

    b. Increment `enemyZombie`'s `winCount`.

    c. Run the `_triggerCooldown` function on `myZombie`. This way the zombie can only attack once per day. (Remember, `_triggerCooldown` is already run inside `feedAndMultiply`. So the zombie's cooldown will be triggered whether he wins or loses.)
