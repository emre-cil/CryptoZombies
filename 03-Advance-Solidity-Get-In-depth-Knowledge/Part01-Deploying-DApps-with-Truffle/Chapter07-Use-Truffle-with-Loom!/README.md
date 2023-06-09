# Chapter 7: Use Truffle with Loom!

It might not seem much, but you just deployed the `CryptoZombies` smart contract!

Even if **Truffle** helped a lot, this is no small feat, so pat yourself on the back.

## Loom Basechain

Now, if you want to build DApps on **_Ethereum_**, there's one thing you should be aware of - on the main net, users are required to **_pay gas fees for every transaction_**. But this isn't ideal for a user-facing DApp or a game. It can easily ruin the user experience.

Conversely, on **_Loom_**, your users can have much speedier and gas-free transactions, making it a much better fit for games and other non-financial applications.

This means that your **_Loom_** zombies will be fast zombies!

That's not all - deploying to **_Loom_** is no different from deploying to Rinkeby, or to the Ethereum main net. If you know how to do one, you also know how to do the other.

In the next chapters, we'll be walking you through deploying to **_Loom_**.

## loom-truffle-provider

We at **_Loom_** are using **Truffle** to build, test, and deploy our smart contracts. To make our life easier, we developed something called a **_provider_** that lets Truffle deploy to **_Loom_** just like it deploys to Rinkeby or Ethereum main net.

Without delving too much into details, the provider works like a bridge that makes Web3 calls compatible with **_Loom_**. The beauty of it is that, to use it, you don't have to understand how it works under the hood.

# Put it to the test:

1.  We've made `loom-truffle-provider` available as an `npm` package. Let's install it.

    > Note: This time, there's no need to make the package available globally.
