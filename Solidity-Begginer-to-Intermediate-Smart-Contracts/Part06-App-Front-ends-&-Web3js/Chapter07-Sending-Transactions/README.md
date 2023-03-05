# Chapter 7: Sending Transactions

Awesome! Now our UI will detect the user's metamask account, and automatically display their zombie army on the homepage.

Now let's look at using `send` functions to change data on our smart contract.

There are a few major differences from `call` functions:

1.  `send`ing a transaction requires a `from` address of who's calling the function (which becomes `msg.sender` in your Solidity code). We'll want this to be the user of our DApp, so MetaMask will pop up to prompt them to sign the transaction.
2.  `send`ing a transaction costs gas
3.  There will be a significant delay from when the user `send`s a transaction and when that transaction actually takes effect on the blockchain. This is because we have to wait for the transaction to be included in a block, and the block time for Ethereum is on average 15 seconds. If there are a lot of pending transactions on Ethereum or if the user sends too low of a gas price, our transaction may have to wait several blocks to get included, and this could take minutes.

    Thus we'll need logic in our app to handle the asynchronous nature of this code.

## Creating zombies

Let's look at an example with the first function in our contract a new user will call: `createRandomZombie`.

As a review, here is the Solidity code in our contract:

```
function createRandomZombie(string _name) public {
  require(ownerZombieCount[msg.sender] == 0);
  uint randDna = _generateRandomDna(_name);
  randDna = randDna - randDna % 100;
  _createZombie(_name, randDna);
}

```

Here's an example of how we could call this function in Web3.js using MetaMask:

```
function createRandomZombie(name) {
  // This is going to take a while, so update the UI to let the user know
  // the transaction has been sent
  $("#txStatus").text("Creating new zombie on the blockchain. This may take a while...");
  // Send the tx to our contract:
  return cryptoZombies.methods.createRandomZombie(name)
  .send({ from: userAccount })
  .on("receipt", function(receipt) {
    $("#txStatus").text("Successfully created " + name + "!");
    // Transaction was accepted into the blockchain, let's redraw the UI
    getZombiesByOwner(userAccount).then(displayZombies);
  })
  .on("error", function(error) {
    // Do something to alert the user their transaction has failed
    $("#txStatus").text(error);
  });
}

```

Our function `send`s a transaction to our Web3 provider, and chains some event listeners:

- `receipt` will fire when the transaction is included into a block on Ethereum, which means our zombie has been created and saved on our contract
- `error` will fire if there's an issue that prevented the transaction from being included in a block, such as the user not sending enough gas. We'll want to inform the user in our UI that the transaction didn't go through so they can try again.

> Note: You can optionally specify `gas` and `gasPrice` when you call `send`, e.g. `.send({ from: userAccount, gas: 3000000 })`. If you don't specify this, MetaMask will let the user choose these values.

## Put it to the Test

We've added a `div` with ID `txStatus` — this way we can use this div to update the user with messages with the status of our transactions.

1.  Below `displayZombies`, copy / paste the code from `createRandomZombie` above.
2.  Let's implement another function: `feedOnKitty`.

    The logic for calling `feedOnKitty` will be almost identical — we'll send a transaction that calls the function, and a successful transaction results in a new zombie being created for us, so we'll want to redraw the UI after it's successful.

    Make a copy of `createRandomZombie` right below it, but make the following changes:

    a) Call the 2nd function `feedOnKitty`, which takes 2 arguments: `zombieId` and `kittyId`

    b) The `#txStatus` text should update to: `"Eating a kitty. This may take a while..."`

    c) Make it call `feedOnKitty` on our contract, and pass the same 2 arguments

    d) The success message on `#txStatus` should read: `"Ate a kitty and spawned a new Zombie!"`
