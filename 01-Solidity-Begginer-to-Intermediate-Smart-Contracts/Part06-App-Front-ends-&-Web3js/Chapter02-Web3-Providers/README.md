# Chapter 2: Web3 Providers

Great! Now that we have Web3.js in our project, let's get it initialized and talking to the blockchain.

The first thing we need is a **_Web3 Provider_**.

Remember, Ethereum is made up of **_nodes_** that all share a copy of the same data. Setting a Web3 Provider in Web3.js tells our code **which node** we should be talking to handle our reads and writes. It's kind of like setting the URL of the remote web server for your API calls in a traditional web app.

You could host your own Ethereum node as a provider. However, there's a third-party service that makes your life easier so you don't need to maintain your own Ethereum node in order to provide a DApp for your users — **_Infura_**.

## Infura

[Infura](https://infura.io/) is a service that maintains a set of Ethereum nodes with a caching layer for fast reads, which you can access for free through their API. Using Infura as a provider, you can reliably send and receive messages to/from the Ethereum blockchain without needing to set up and maintain your own node.

You can set up Web3 to use Infura as your web3 provider as follows:

```
var web3 = new Web3(new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws"));

```

However, since our DApp is going to be used by many users — and these users are going to WRITE to the blockchain and not just read from it — we'll need a way for these users to sign transactions with their private key.

> Note: Ethereum (and blockchains in general) use a public / private key pair to digitally sign transactions. Think of it like an extremely secure password for a digital signature. That way if I change some data on the blockchain, I can **prove** via my public key that I was the one who signed it — but since no one knows my private key, no one can forge a transaction for me.

Cryptography is complicated, so unless you're a security expert and you really know what you're doing, it's probably not a good idea to try to manage users' private keys yourself in our app's front-end.

But luckily you don't need to — there are already services that handle this for you. The most popular of these is **_Metamask_**.

## Metamask

[Metamask](https://metamask.io/) is a browser extension for Chrome and Firefox that lets users securely manage their Ethereum accounts and private keys, and use these accounts to interact with websites that are using Web3.js. (If you haven't used it before, you'll definitely want to go and install it — then your browser is Web3 enabled, and you can now interact with any website that communicates with the Ethereum blockchain!).

And as a developer, if you want users to interact with your DApp through a website in their web browser (like we're doing with our CryptoZombies game), you'll definitely want to make it Metamask-compatible.

> **Note**: Metamask uses Infura's servers under the hood as a web3 provider, just like we did above — but it also gives the user the option to choose their own web3 provider. So by using Metamask's web3 provider, you're giving the user a choice, and it's one less thing you have to worry about in your app.

## Using Metamask's web3 provider

Metamask injects their web3 provider into the browser in the global JavaScript object `web3`. So your app can check to see if `web3` exists, and if it does use `web3.currentProvider` as its provider.

Here's some template code provided by Metamask for how we can detect to see if the user has Metamask installed, and if not tell them they'll need to install it to use our app:

```
window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3js = new Web3(web3.currentProvider);
  } else {
    // Handle the case where the user doesn't have web3. Probably
    // show them a message telling them to install Metamask in
    // order to use our app.
  }

  // Now you can start your app & access web3js freely:
  startApp()

})

```

You can use this boilerplate code in all the apps you create in order to require users to have Metamask to use your DApp.

> Note: There are other private key management programs your users might be using besides MetaMask, such as the web browser **Mist**. However, they all implement a common pattern of injecting the variable `web3`, so the method we describe here for detecting the user's web3 provider will work for these as well.

## Put it to the Test

We've created some empty script tags before the closing `</body>` tag in our HTML file. We can write our JavaScript code for this lesson here.

1.  Go ahead and copy/paste the template code from above for detecting Metamask. It's the block that starts with `window.addEventListener`.
