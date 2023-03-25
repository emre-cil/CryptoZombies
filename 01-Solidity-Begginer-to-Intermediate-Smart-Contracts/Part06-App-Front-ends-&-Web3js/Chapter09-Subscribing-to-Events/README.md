# Chapter 9: Subscribing to Events

As you can see, interacting with your contract via Web3.js is pretty straightforward — once you have your environment set up, `call`ing functions and `send`ing transactions is not all that different from a normal web API.

There's one more aspect we want to cover — subscribing to events from your contract.

## Listening for New Zombies

If you recall from `zombiefactory.sol`, we had an event called `NewZombie` that we fired every time a new zombie was created:

```
event NewZombie(uint zombieId, string name, uint dna);

```

In Web3.js, you can **subscribe** to an event so your web3 provider triggers some logic in your code every time it fires:

```
cryptoZombies.events.NewZombie()
.on("data", function(event) {
  let zombie = event.returnValues;
  // We can access this event's 3 return values on the `event.returnValues` object:
  console.log("A new zombie was born!", zombie.zombieId, zombie.name, zombie.dna);
}).on("error", console.error);

```

Note that this would trigger an alert every time ANY zombie was created in our DApp — not just for the current user. What if we only wanted alerts for the current user?

## Using `indexed`

In order to filter events and only listen for changes related to the current user, our Solidity contract would have to use the `indexed` keyword, like we did in the `Transfer` event of our ERC721 implementation:

```
event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);

```

In this case, because `_from` and `_to` are `indexed`, that means we can filter for them in our event listener in our front end:

```
// Use `filter` to only fire this code when `_to` equals `userAccount`
cryptoZombies.events.Transfer({ filter: { _to: userAccount } })
.on("data", function(event) {
  let data = event.returnValues;
  // The current user just received a zombie!
  // Do something here to update the UI to show it
}).on("error", console.error);

```

As you can see, using `event`s and `indexed` fields can be quite a useful practice for listening to changes to your contract and reflecting them in your app's front-end.

## Querying past events

We can even query past events using `getPastEvents`, and use the filters `fromBlock` and `toBlock` to give Solidity a time range for the event logs ("block" in this case referring to the Ethereum block number):

```
cryptoZombies.getPastEvents("NewZombie", { fromBlock: 0, toBlock: "latest" })
.then(function(events) {
  // `events` is an array of `event` objects that we can iterate, like we did above
  // This code will get us a list of every zombie that was ever created
});

```

Because you can use this method to query the event logs since the beginning of time, this presents an interesting use case: **Using events as a cheaper form of storage**.

If you recall, saving data to the blockchain is one of the most expensive operations in Solidity. But using events is much much cheaper in terms of gas.

The tradeoff here is that events are not readable from inside the smart contract itself. But it's an important use-case to keep in mind if you have some data you want to be historically recorded on the blockchain so you can read it from your app's front-end.

For example, we could use this as a historical record of zombie battles — we could create an event for every time one zombie attacks another and who won. The smart contract doesn't need this data to calculate any future outcomes, but it's useful data for users to be able to browse from the app's front-end.

## Put it to the Test

Let's add some code to listen for the `Transfer` event, and update our app's UI if the current user receives a new zombie.

We'll need to add this code at the end of the `startApp` function, to make sure the `cryptoZombies` contract has been initialized before adding an event listener.

1.  At the end of `startApp()`, copy/paste the code block above listening for `cryptoZombies.events.Transfer`
2.  For the line to update the UI, use `getZombiesByOwner(userAccount).then(displayZombies);`
