# Chapter 10: Saving Gas With 'View' Functions

Awesome! Now we have some special abilities for higher-level zombies, to give our owners an incentive to level them up. We can add more of these later if we want to.

Let's add one more function: our DApp needs a method to view a user's entire zombie army — let's call it `getZombiesByOwner`.

This function will only need to read data from the blockchain, so we can make it a `view` function. Which brings us to an important topic when talking about gas optimization:

## View functions don't cost gas

`view` functions don't cost any gas when they're called externally by a user.

This is because `view` functions don't actually change anything on the blockchain – they only read the data. So marking a function with `view` tells `web3.js` that it only needs to query your local Ethereum node to run the function, and it doesn't actually have to create a transaction on the blockchain (which would need to be run on every single node, and cost gas).

We'll cover setting up web3.js with your own node later. But for now the big takeaway is that you can optimize your DApp's gas usage for your users by using read-only `external view` functions wherever possible.

> Note: If a `view` function is called internally from another function in the same contract that is **not** a `view` function, it will still cost gas. This is because the other function creates a transaction on Ethereum, and will still need to be verified from every node. So `view` functions are only free when they're called externally.

## Put it to the test

We're going to implement a function that will return a user's entire zombie army. We can later call this function from `web3.js` if we want to display a user profile page with their entire army.

This function's logic is a bit complicated so it will take a few chapters to implement.

1.  Create a new function named `getZombiesByOwner`. It will take one argument, an `address` named `_owner`.
2.  Let's make it an `external view` function, so we can call it from `web3.js` without needing any gas.
3.  The function should return a `uint[]` (an array of `uint`) as `memory` data location.

Leave the function body empty for now, we'll fill it in in the next chapter.
