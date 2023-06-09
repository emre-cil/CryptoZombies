# Chapter 4: Migrations

Normally at this point, before deploying to **_Ethereum_**, you would want to test your smart contract locally. You can do this using a tool called [Ganache](https://truffleframework.com/ganache), which sets up a local **_Ethereum_** network.

However, while testing is very important, it requires an entire lesson to cover — so we’re just going to stick to deployment in this lesson. If you're so inclined, to learn more about testing, I recommend our very own [Testing Smart Contracts with Truffle](http://cryptozombies.io/en/lesson/10) lesson.

To deploy to **_Ethereum_** we will have to create something called a **migration**.

Migrations are JavaScript files that help **Truffle** deploy the code to **_Ethereum_**. Note that `truffle init` created a special contract called `Migrations.sol` that keeps track of the changes you're making to your code. The way it works is that the history of changes is saved onchain. Thus, there's no way you will ever deploy the same code twice.

## Creating a New Migration

We'll start from the file `truffle init` already created for us- `./contracts/1_initial_migration.js`. Let's take a look at what's inside:

```
var Migrations = artifacts.require("./Migrations.sol");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

```

Pretty straightforward, isn't it?

First, the script tells **Truffle** that we'd want to interact with the `Migrations` contract.

Next, it exports a function that accepts an object called `deployer` as a parameter. This object acts as an interface between you (the developer) and **Truffle**'s deployment engine. Even though the `deployer` provides a multitude of useful functions, we won't be using them in the scope of this lesson. Once you've finished, feel free to check out **Truffle**'s [documentation](https://truffleframework.com/docs/truffle/getting-started/running-migrations) if you're inclined to learn more about **Truffle**'s abilities.

To get everything ready for deployment, we've gone ahead and created a new file `./contracts/2_crypto_zombies.js`, and copied and pasted the content from `./contracts/1_initial_migration.js`.

# Put it to the test:

1.  Modify `./contracts/2_crypto_zombies.js` to this:

```
var CryptoZombies = artifacts.require("./CryptoZombies.sol");
module.exports = function(deployer) {
  deployer.deploy(CryptoZombies);
};
```
