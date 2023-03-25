# Chapter 5: Metamask & Accounts

Awesome! You've successfully written front-end code to interact with your first smart contract.

Now let's put some pieces together — let's say we want our app's homepage to display a user's entire zombie army.

Obviously we'd first need to use our function `getZombiesByOwner(owner)` to look up all the IDs of zombies the current user owns.

But our Solidity contract is expecting `owner` to be a Solidity `address`. How can we know the address of the user using our app?

## Getting the user's account in MetaMask

MetaMask allows the user to manage multiple accounts in their extension.

We can see which account is currently active on the injected `web3` variable via:

```
var userAccount = web3.eth.accounts[0]

```

Because the user can switch the active account at any time in MetaMask, our app needs to monitor this variable to see if it has changed and update the UI accordingly. For example, if the user's homepage displays their zombie army, when they change their account in MetaMask, we'll want to update the page to show the zombie army for the new account they've selected.

We can do that with a `setInterval` loop as follows:

```
var accountInterval = setInterval(function() {
  // Check if account has changed
  if (web3.eth.accounts[0] !== userAccount) {
    userAccount = web3.eth.accounts[0];
    // Call some function to update the UI with the new account
    updateInterface();
  }
}, 100);

```

What this does is check every 100 milliseconds to see if `userAccount` is still equal `web3.eth.accounts[0]` (i.e. does the user still have that account active). If not, it reassigns `userAccount` to the currently active account, and calls a function to update the display.

## Put it to the Test

Let's make it so our app will display the user's zombie army when the page first loads, and monitor the active account in MetaMask to refresh the display if it changes.

1.  Declare a `var` named `userAccount`, but don't assign it to anything.
2.  At the end of `startApp()`, copy/paste the boilerplate `accountInterval` code from above
3.  Replace the line `updateInterface();` with a call to `getZombiesByOwner`, and pass it `userAccount`
4.  Chain a `then` statement after `getZombiesByOwner` and pass the result to a function named `displayZombies`. (The syntax is: `.then(displayZombies);`).

    We don't have a function called `displayZombies` yet, but we'll implement it in the next chapter.
