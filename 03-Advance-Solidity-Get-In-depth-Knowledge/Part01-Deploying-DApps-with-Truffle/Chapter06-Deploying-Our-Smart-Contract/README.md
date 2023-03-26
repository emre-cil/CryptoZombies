# Chapter 6: Deploying Our Smart Contract

Great! That was the difficult part — actually deploying to Rinkeby is going to be straightforward. To do this, **Truffle** relies on something called a **_migration_**.

# Migrations

It sounds like a migration involves a lot of stuff moving around, but in practice, a migration is nothing more than a JavaScript file that tells **Truffle** how to modify the state of our smart contracts.

Obviously, the first migration will just deploy the smart contract. Some other migrations deploy a new version of the code to add features or fix bugs.

In a nutshell, migrations provide a convenient way to keep track of the changes you make to your code.

If you want to deploy more than one contract, a separate migration file must be created for each contract. Migrations are always executed in order- 1,2,3, etc.

In this lesson, we will deploy only to Rinkeby. Deployment to the main net would require real money to pay for the gas and, once deployed, we won't be able to modify the code. Hence, it's best to deploy to Rinkeby first, and thoroughly test the code.

## Get some Ether

Before doing the deployment, make sure there is enough Ether in your account. The easiest way to get Ether for testing purposes is through a service known as a `faucet`. We recommend the [Authenticated Faucet](https://faucet.rinkeby.io/) running on Rinkeby. Follow the instructions, and within a few minutes, your address will be credited with some Ether.

# Put it to the test

1.  Now that everything is set up, it's time to deploy to Rinkeby. To do so, run `truffle migrate --network rinkeby` in the terminal to the right. Note how migrations are being executed in order😉.

    > Note: `truffle deploy` is just an alias for `truffle migrate`. However, since our command-line interpreter is pretty basic, it won't consider the answer correct unless you're using `migrate`.

Deployment to the main net is not complicated at all. Once the smart contract is tested, you'll only have to run: `truffle migrate --network mainnet`. Don't forget that you'll have to pay for gas! We trust you'll be able to do it.

If everything goes well, you're going to see a response that's similar to the one to the right.
