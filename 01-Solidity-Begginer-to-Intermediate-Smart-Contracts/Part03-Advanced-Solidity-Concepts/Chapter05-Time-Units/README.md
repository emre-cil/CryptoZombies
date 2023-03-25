# Chapter 5: Time Units

The `level` property is pretty self-explanatory. Later on, when we create a battle system, zombies who win more battles will level up over time and get access to more abilities.

The `readyTime` property requires a bit more explanation. The goal is to add a "cooldown period", an amount of time a zombie has to wait after feeding or attacking before it's allowed to feed / attack again. Without this, the zombie could attack and multiply 1,000 times per day, which would make the game way too easy.

In order to keep track of how much time a zombie has to wait until it can attack again, we can use Solidity's time units.

## Time units

Solidity provides some native units for dealing with time.

The variable `now` will return the current unix timestamp of the latest block (the number of seconds that have passed since January 1st 1970). The unix time as I write this is `1515527488`.

> Note: Unix time is traditionally stored in a 32-bit number. This will lead to the "Year 2038" problem, when 32-bit unix timestamps will overflow and break a lot of legacy systems. So if we wanted our DApp to keep running 20 years from now, we could use a 64-bit number instead — but our users would have to spend more gas to use our DApp in the meantime. Design decisions!

Solidity also contains the time units `seconds`, `minutes`, `hours`, `days`, `weeks` and `years`. These will convert to a `uint` of the number of seconds in that length of time. So `1 minutes` is `60`, `1 hours` is `3600` (60 seconds x 60 minutes), `1 days` is `86400` (24 hours x 60 minutes x 60 seconds), etc.

Here's an example of how these time units can be useful:

```
uint lastUpdated;

// Set `lastUpdated` to `now`
function updateTimestamp() public {
  lastUpdated = now;
}

// Will return `true` if 5 minutes have passed since `updateTimestamp` was
// called, `false` if 5 minutes have not passed
function fiveMinutesHavePassed() public view returns (bool) {
  return (now >= (lastUpdated + 5 minutes));
}

```

We can use these time units for our Zombie `cooldown` feature.

## Put it to the test

Let's add a cooldown time to our DApp, and make it so zombies have to wait **1 day** after attacking or feeding to attack again.

1.  Declare a `uint` called `cooldownTime`, and set it equal to `1 days`. (Forgive the poor grammar — if you set it equal to "1 day", it won't compile!)
2.  Since we added a `level` and `readyTime` to our `Zombie` struct in the previous chapter, we need to update `_createZombie()` to use the correct number of arguments when we create a new `Zombie` struct.

    Update the `zombies.push` line of code to add 2 more arguments: `1` (for `level`), and `uint32(now + cooldownTime)` (for `readyTime`).

> Note: The `uint32(...)` is necessary because `now` returns a `uint256` by default. So we need to explicitly convert it to a `uint32`.

`now + cooldownTime` will equal the current unix timestamp (in seconds) plus the number of seconds in 1 day — which will equal the unix timestamp 1 day from now. Later we can compare to see if this zombie's `readyTime` is greater than `now` to see if enough time has passed to use the zombie again.

We'll implement the functionality to limit actions based on `readyTime` in the next chapter.
