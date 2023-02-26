# Chapter 10: Zombie Victory 😄

Now that we have a `winCount` and `lossCount`, we can update them depending on which zombie wins the fight.

In chapter 6 we calculated a random number from 0 to 100. Now let's use that number to determine who wins the fight, and update our stats accordingly.

## Put it to the test

1.  Create an `if` statement that checks if `rand` is **_less than or equal to_** `attackVictoryProbability`.
2.  If this condition is true, our zombie wins! So:

    a. Increment `myZombie`'s `winCount`.

    b. Increment `myZombie`'s `level`. (Level up!!!!!!!)

    c. Increment `enemyZombie`'s `lossCount`. (Loser!!!!!! 😫 😫 😫)

    d. Run the `feedAndMultiply` function. Check `zombiefeeding.sol` to see the syntax for calling it. For the 3rd argument (`_species`), pass the string `"zombie"`. (It doesn't actually do anything at the moment, but later we could add extra functionality for spawning zombie-based zombies if we wanted to).
